from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from werkzeug.security import generate_password_hash, check_password_hash
import mysql.connector
import json

app = FastAPI()

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# DB connections
def get_leader_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="Qwerty123!",
        database="leaders"
    )

def get_questions_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="Qwerty123!",
        database="questions"
    )

# ============ Models ============
class RegisterUser(BaseModel):
    firstName: str
    lastName: str
    email: str
    password: str

class LoginUser(BaseModel):
    email: str
    password: str

class ScoreUpdate(BaseModel):
    email: str
    course: str
    score: int

# ============ Auth & Leaderboard Routes ============

@app.post("/api/register")
def register_user(user: RegisterUser):
    conn = get_leader_db_connection()
    cursor = conn.cursor(dictionary=True)

    cursor.execute("SELECT * FROM auth_users WHERE email = %s", (user.email,))
    existing_user = cursor.fetchone()
    if existing_user:
        cursor.close()
        conn.close()
        raise HTTPException(status_code=409, detail="User already exists")

    hashed_password = generate_password_hash(user.password)
    cursor.execute("""
        INSERT INTO auth_users (first_name, last_name, email, password)
        VALUES (%s, %s, %s, %s)
    """, (user.firstName, user.lastName, user.email, hashed_password))
    conn.commit()

    user_id = cursor.lastrowid
    full_name = f"{user.firstName} {user.lastName}"

    cursor.execute("""
        INSERT INTO leaderboard (name, course, score)
        VALUES (%s, %s, %s)
    """, (full_name, "Python Basics", 0))
    conn.commit()

    cursor.close()
    conn.close()

    return JSONResponse(content={
        "message": "User registered successfully",
        "user": {
            "id": user_id,
            "firstName": user.firstName,
            "lastName": user.lastName,
            "email": user.email
        }
    }, status_code=201)

@app.post("/api/login")
def login_user(user: LoginUser):
    conn = get_leader_db_connection()
    cursor = conn.cursor(dictionary=True)

    cursor.execute("SELECT * FROM auth_users WHERE email = %s", (user.email,))
    db_user = cursor.fetchone()

    cursor.close()
    conn.close()

    if not db_user:
        raise HTTPException(status_code=401, detail="User not found")

    if not check_password_hash(db_user["password"], user.password):
        raise HTTPException(status_code=401, detail="Incorrect password")

    return JSONResponse(content={
        "message": "Login successful",
        "user": {
            "id": db_user["id"],
            "firstName": db_user["first_name"],
            "lastName": db_user["last_name"],
            "email": db_user["email"]
        }
    }, status_code=200)

@app.get("/api/leaderboard")
def read_leaderboard():
    conn = get_leader_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT id, name, course, score FROM leaderboard ORDER BY score DESC")
    results = cursor.fetchall()
    cursor.close()
    conn.close()
    return results

@app.post("/api/update-score")
def update_score(score_data: ScoreUpdate):
    conn = get_leader_db_connection()
    cursor = conn.cursor(dictionary=True)

    # Get user's full name by email
    cursor.execute("SELECT first_name, last_name FROM auth_users WHERE email = %s", (score_data.email,))
    user = cursor.fetchone()

    if not user:
        cursor.close()
        conn.close()
        raise HTTPException(status_code=404, detail="User not found")

    full_name = f"{user['first_name']} {user['last_name']}"
    course_name = "Python Basics"  # <- жестко задаем имя курса

    # Check if user already has a record for this course
    cursor.execute("SELECT * FROM leaderboard WHERE name = %s AND course = %s",
                   (full_name, course_name))
    existing = cursor.fetchone()

    if existing:
        new_score = existing['score'] + score_data.score
        cursor.execute("UPDATE leaderboard SET score = %s WHERE id = %s",
                       (new_score, existing['id']))
    else:
        cursor.execute("INSERT INTO leaderboard (name, course, score) VALUES (%s, %s, %s)",
                       (full_name, course_name, score_data.score))

    conn.commit()
    cursor.close()
    conn.close()
    return {"message": "Score updated successfully"}

# ============ Questions Route ============

@app.get("/api/questions")
def get_questions(topic: str = None):
    if not topic:
        raise HTTPException(status_code=400, detail="Topic is required")

    try:
        conn = get_questions_db_connection()
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT question, options, answer FROM questions WHERE topic = %s", (topic,))
        rows = cursor.fetchall()
    except mysql.connector.Error as err:
        raise HTTPException(status_code=500, detail=str(err))
    finally:
        if 'cursor' in locals(): cursor.close()
        if 'conn' in locals(): conn.close()

    questions = []
    for row in rows:
        questions.append({
            "question": row["question"],
            "options": json.loads(row["options"]),
            "answer": row["answer"]
        })

    return JSONResponse(content=questions)

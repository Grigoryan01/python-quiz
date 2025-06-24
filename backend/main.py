from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from fastapi.responses import JSONResponse
from werkzeug.security import generate_password_hash, check_password_hash
import mysql.connector

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="Qwerty123!",
        database="leaders"
    )

class RegisterUser(BaseModel):
    firstName: str
    lastName: str
    email: str
    password: str

class LoginUser(BaseModel):
    email: str
    password: str

@app.post("/api/register")
def register_user(user: RegisterUser):
    conn = get_db_connection()
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
    conn = get_db_connection()
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
    db = get_db_connection()
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT id, name, course, score FROM leaderboard ORDER BY score DESC")
    results = cursor.fetchall()
    cursor.close()
    db.close()
    return results

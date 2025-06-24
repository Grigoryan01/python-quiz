# main.py
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import mysql.connector
import json

app = FastAPI()

# CORS setup
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Replace with frontend URL in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="Qwerty123!",
        database="questions"
    )

@app.get("/api/questions")
def get_questions(topic: str = None):
    if not topic:
        raise HTTPException(status_code=400, detail="Topic is required")

    try:
        conn = get_db_connection()
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

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import mysql.connector

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
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

@app.get("/api/leaderboard")
def read_leaderboard():
    db = get_db_connection()
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT id, name, course, score FROM leaderboard ORDER BY score DESC")
    results = cursor.fetchall()
    cursor.close()
    db.close()
    return results

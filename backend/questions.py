from flask import Flask, jsonify, request
import mysql.connector
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def get_db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="Qwerty123!",
        database="questions"
    )

@app.route('/api/questions')
def get_questions():
    topic = request.args.get('topic')
    if not topic:
        return jsonify({"error": "Topic is required"}), 400

    conn = get_db_connection()
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT question, options, answer FROM questions WHERE topic = %s", (topic,))
    rows = cursor.fetchall()
    cursor.close()
    conn.close()

    questions = []
    for row in rows:
        questions.append({
            "question": row["question"],
            "options": json.loads(row["options"]),
            "answer": row["answer"],
        })

    return jsonify(questions)

if __name__ == "__main__":
    app.run(debug=True)

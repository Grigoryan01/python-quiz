import { useState, useEffect } from "react";
import { CheckCircle, XCircle, Target } from "lucide-react";

interface Question {
  question: string;
  options: string[];
  answer: string;
}

interface QuizContentProps {
  topic: string;
}

const SkeletonQuestion = () => (
  <div className="bg-white rounded-2xl shadow p-6 animate-pulse space-y-4">
    <div className="h-6 bg-gray-300 rounded w-1/3"></div>
    <div className="space-y-2">
      <div className="h-4 bg-gray-300 rounded w-full"></div>
      <div className="h-4 bg-gray-300 rounded w-5/6"></div>
      <div className="h-4 bg-gray-300 rounded w-4/6"></div>
    </div>
  </div>
);

const QuizContent = ({ topic }: QuizContentProps) => {
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<string[]>([]);
  const [score, setScore] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setQuestions(null);
    setScore(null);
    setFeedback([]);
    setUserAnswers([]);

fetch(`http://localhost:5000/api/questions?topic=${encodeURIComponent(topic)}`)
  .then(res => {
    if (!res.ok) throw new Error(`Ошибка загрузки данных: ${res.status} ${res.statusText}`);
    return res.json();
  })
  .then(data => {
    setQuestions(data);
    setUserAnswers(Array(data.length).fill(""));
    setFeedback(Array(data.length).fill(""));
  })
  .catch(err => {
    console.error(err);
    setError(err.message);
  })
  .finally(() => setLoading(false));

  }, [topic]);

  const handleSelect = (index: number, answer: string) => {
    const updated = [...userAnswers];
    updated[index] = answer;
    setUserAnswers(updated);
  };

  const handleSubmit = () => {
    if (!questions) return;

    const newFeedback = questions.map((q, i) =>
      userAnswers[i] === q.answer ? "Правильно!" : `Неправильно. Правильный ответ: ${q.answer}`
    );

    const totalScore = questions.reduce(
      (acc, q, i) => (userAnswers[i] === q.answer ? acc + 1 : acc),
      0
    );

    setFeedback(newFeedback);
    setScore(totalScore);
  };

  if (loading) {
    // Показываем skeleton
    return (
      <section className="flex-1 p-6 lg:p-10 bg-gray-50 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl lg:text-4xl font-bold mb-8 text-gray-800">{topic}</h2>
          <div className="space-y-8">
            <SkeletonQuestion />
            <SkeletonQuestion />
            <SkeletonQuestion />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex-1 p-6 lg:p-10 bg-gray-50 min-h-screen">
        <div className="max-w-3xl mx-auto text-red-600 font-semibold">
          Ошибка: {error}
        </div>
      </section>
    );
  }

  if (!questions || questions.length === 0) {
    return (
      <section className="flex-1 p-6 lg:p-10 bg-gray-50 min-h-screen">
        <div className="max-w-3xl mx-auto text-gray-600 font-semibold">
          Нет вопросов по теме "{topic}"
        </div>
      </section>
    );
  }

  // Рендерим вопросы
  return (
    <section className="flex-1 p-6 lg:p-10 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl lg:text-4xl font-bold mb-8 text-gray-800">{topic}</h2>

        <div className="space-y-8">
          {questions.map((q, index) => (
            <div key={index} className="bg-white rounded-2xl shadow p-6">
              <p className="font-semibold text-lg mb-4 text-gray-800">
                {index + 1}. {q.question}{" "}
                <span className="text-sm text-gray-500">(1 балл)</span>
              </p>
              <div className="flex flex-col gap-2">
                {q.options.map((opt, i) => (
                  <label key={i} className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="radio"
                      name={`q-${index}`}
                      value={opt}
                      checked={userAnswers[index] === opt}
                      onChange={() => handleSelect(index, opt)}
                      className="form-radio text-gray-800 focus:ring-gray-500"
                    />
                    <span className="text-gray-700">{opt}</span>
                  </label>
                ))}
              </div>

              {feedback[index] && (
                <div className="mt-4 flex items-start gap-2">
                  {userAnswers[index] === questions[index].answer ? (
                    <>
                      <CheckCircle className="w-5 h-5 text-green-600 " />
                      <p className="font-medium text-green-600">{feedback[index]}</p>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-red-600 " />
                      <p className="font-medium text-red-600">{feedback[index]}</p>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={handleSubmit}
          className="mt-8 px-6 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 cursor-pointer transition text-lg"
        >
          Проверить ответы
        </button>

        {score !== null && (
          <div className="mt-6 text-xl font-semibold text-gray-800 flex items-center gap-2">
            <Target className="w-6 h-6 text-blue-600" />
            Ваш счёт:{" "}
            <span className="text-blue-600 font-bold">
              {score}
            </span>{" "}
            из {questions.length}
          </div>
        )}
      </div>
    </section>
  );
};

export default QuizContent;

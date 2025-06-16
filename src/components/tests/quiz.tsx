import Sidebar from '../../components/tests/sidebar';
import { Question } from '@/type/type';

const quizData: Record<string, Question[]> = {
intro: [
    {
      question: 'Что такое переменная в Python?',
      options: ['Тип данных', 'Место хранения информации', 'Цикл', 'Функция'],
      answer: 'Место хранения информации',
    },
    {
      question: 'Как объявить переменную?',
      options: ['let x = 5', 'x := 5', 'x = 5', 'var x = 5'],
      answer: 'x = 5',
    },
    {
      question: 'Какой тип данных для числа с точкой?',
      options: ['int', 'float', 'str', 'bool'],
      answer: 'float',
    },
    {
      question: 'Как обозначается комментарий в Python?',
      options: ['//', '<!-- -->', '#', '--'],
      answer: '#',
    },
    {
      question: 'Какая функция используется для вывода?',
      options: ['print()', 'echo()', 'console.log()', 'out()'],
      answer: 'print()',
    },
  ],

};

const QuizPage = () => {
  const questions: Question[] = quizData['intro'];

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-4">Вопросы по теме: Основы Python</h1>
        <ul className="space-y-4">
          {questions.map((q, index) => (
            <li key={index} className="p-4 border rounded shadow">
              <p className="font-medium">{index + 1}. {q.question}</p>
              <ul className="mt-2 space-y-1">
                {q.options.map((option: string, i: number) => (
                  <li key={i}>
                    <label className="flex items-center gap-2">
                      <input type="radio" name={`q-${index}`} value={option} />
                      {option}
                    </label>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default QuizPage;
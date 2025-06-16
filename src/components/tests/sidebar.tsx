// components/Sidebar.tsx
import {  BookOpen } from 'lucide-react';

const Sidebar=()=> {
    const quizLinks = [
  { title: 'Основы Python', href: '/quizzes/intro' },
  { title: 'Простые типы данных', href: '/quizzes/types' },
  { title: 'Циклы', href: '/quizzes/loops' },
  { title: 'Коллекции', href: '/quizzes/collections' },
  { title: 'Функции', href: '/quizzes/functions' },
  { title: 'Файлы и данные', href: '/quizzes/files' },
  { title: 'Итераторы и генераторы', href: '/quizzes/iterators' },
];
  return (
    <aside className="w-64 min-h-screen bg-white border-r hidden md:block">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold text-gray-800">Викторины</h2>
      </div>
        <nav className="flex flex-col p-4 space-y-2 text-gray-700 text-base">
        {quizLinks.map((link) => (
          <p
            className="flex items-center gap-2 p-2 rounded hover:bg-blue-100"
          >
            <BookOpen size={20} />
            <span>{link.title}</span>
          </p>
        ))}
      </nav>
    </aside>
  );
}


export default Sidebar
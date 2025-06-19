"use client";

import { useEffect, useState } from "react";
import axios from "axios";

type Leader = {
  id: number;
  name: string;
  course: string;
  score: number;
};

const LeadersPage = () => {
  const [leaders, setLeaders] = useState<Leader[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/leaderboard")
      .then((res) => {
        // Сортировка по очкам (по убыванию)
        const sortedLeaders = res.data.sort(
          (a: Leader, b: Leader) => b.score - a.score
        );
        setLeaders(sortedLeaders);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Ошибка при получении данных:", err);
        setError("Не удалось загрузить таблицу лидеров.");
        setLoading(false);
      });
  }, []);

if (loading) {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="animate-spin h-12 w-12 rounded-full border-4 border-gray-500 border-opacity-50 border-t-gray-900"></div>
    </div>
  );
}


  if (error) {
    return <p className="text-center text-red-600">{error}</p>;
  }

  return (
    <div className="overflow-x-auto p-10">
      <table className="min-w-full border-collapse overflow-hidden shadow-xl bg-white ">
        <caption className="caption-top text-lg font-semibold text-gray-700 mb-4">
          🏆 Таблица лидеров
        </caption>
        <thead className="bg-gradient-to-r from-blue-500 to-blue-700 text-white text-center">
          <tr>
            <th className="border border-slate-300 p-4">Место</th>
            <th className="border border-slate-300 p-4">Имя</th>
            <th className="border border-slate-300 p-4">Курс</th>
            <th className="border border-slate-300 p-4">Очки</th>
          </tr>
        </thead>
        <tbody className="text-gray-800 text-center">
          {leaders.map((leader, index) => {
            const isTop3 = index < 3;
            return (
              <tr
                key={leader.id}
                className={`transition-colors duration-200 ${
                  isTop3 ? "bg-yellow-100 font-semibold" : "hover:bg-purple-50"
                }`}
              >
                <td className="border border-slate-300 p-4">{index + 1}</td>
                <td className="border border-slate-300 p-4">{leader.name}</td>
                <td className="border border-slate-300 p-4">{leader.course}</td>
                <td className="border border-slate-300 p-4">{leader.score}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default LeadersPage;

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

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/leaderboard")
      .then((res) => setLeaders(res.data))
      .catch((err) => console.error("Ошибка при получении данных:", err));
  }, []);

  return (
    <table className="table-auto w-full border-collapse rounded-xl overflow-hidden shadow-lg bg-white hover:cursor-pointer">
      <caption className="caption-top text-lg font-semibold text-gray-700 mb-4">
        🏆 Таблица лидеров
      </caption>
      <thead className="bg-gradient-to-r from-indigo-500 text-center to-purple-600 text-white">
        <tr>
          <th className="border border-slate-300 p-4">Место</th>
          <th className="border border-slate-300 p-4">Имя</th>
          <th className="border border-slate-300 p-4">Курс</th>
          <th className="border border-slate-300 p-4">Очки</th>
        </tr>
      </thead>
      <tbody className="text-gray-800 text-center">
        {leaders.map((leader, index) => (
          <tr
            key={leader.id}
            className="hover:bg-purple-50 transition-colors duration-200"
          >
            <td className="border border-slate-300 p-4">{index + 1}</td>
            <td className="border border-slate-300 p-4">{leader.name}</td>
            <td className="border border-slate-300 p-4">{leader.course}</td>
            <td className="border border-slate-300 p-4">{leader.score}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeadersPage;

const LeadersPage=()=>{
    return(
<table className="table-auto w-full border-collapse rounded-xl overflow-hidden shadow-lg bg-white hover:cursor-pointer">
  <caption className="caption-top text-lg font-semibold text-gray-700 mb-4">
    🏆 Таблица лидеров
  </caption>
  <thead className="bg-gradient-to-r from-indigo-500 text-center to-purple-600 text-white">
    <tr>
      <th className="border border-slate-300 p-4 ">Место</th>
      <th className="border border-slate-300 p-4 ">Имя</th>
      <th className="border border-slate-300 p-4 ">Курс</th>
      <th className="border border-slate-300 p-4 ">Очки</th>
    </tr>
  </thead>
  <tbody className="text-gray-800 text-center">
    <tr className="hover:bg-purple-50 transition-colors duration-200">
      <td className="border border-slate-300 p-4">1</td>
      <td className="border border-slate-300 p-4">Алексей Иванов</td>
      <td className="border border-slate-300 p-4">Python Basics</td>
      <td className="border border-slate-300 p-4">980</td>
    </tr>
    <tr className="hover:bg-purple-50 transition-colors duration-200">
      <td className="border border-slate-300 p-4">2</td>
      <td className="border border-slate-300 p-4">Мария Смирнова</td>
      <td className="border border-slate-300 p-4">OOP in Python</td>
      <td className="border border-slate-300 p-4">870</td>
    </tr>
    <tr className="hover:bg-purple-50 transition-colors duration-200">
      <td className="border border-slate-300 p-4">3</td>
      <td className="border border-slate-300 p-4">Игорь Ким</td>
      <td className="border border-slate-300 p-4">Flask API</td>
      <td className="border border-slate-300 p-4">820</td>
    </tr>
  </tbody>
</table>

    )
}


export default LeadersPage
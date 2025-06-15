import { CardsData } from "../../type/type";
const CourseCard = ({ title, startMonth, duration, location, format, language, isFree = true }:CardsData) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg hover:cursor-pointer transition-shadow">
      <div className="flex items-center gap-2 mb-4">
        {isFree && (
          <span className="text-xs px-3 py-1 bg-blue-100 text-blue-800 rounded-full font-semibold">
            ✅ Free
          </span>
        )}
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-1">{title}</h2>
      <p className="text-sm text-gray-500 mb-3">{startMonth} · {duration}</p>

      <p className="text-purple-500 text-sm font-medium mb-2">⚡⚡⚡ Fundamentals</p>

      <ul className="text-sm text-gray-700 space-y-1">
        <li>📍 {location}</li>
        <li>💻 {format}</li>
        <li>🌐 {language}</li>
      </ul>
    </div>
  );
};

export default CourseCard;

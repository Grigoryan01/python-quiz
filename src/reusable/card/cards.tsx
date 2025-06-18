import { CardsData } from "../../type/type";
import { FaMapMarkerAlt, FaLaptopCode, FaGlobe, FaCheckCircle } from "react-icons/fa";
import { HiLightningBolt } from "react-icons/hi";

const CourseCard = ({
  title,
  startMonth,
  duration,
  location,
  format,
  language,
  isFree = true,
}: CardsData) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between hover:shadow-lg hover:cursor-pointer transition-shadow">
 {isFree && (
  <div className="flex items-center gap-2 text-blue-600 text-sm font-semibold mb-4">
    <FaCheckCircle className="w-5 h-5" />
    Free
  </div>
)}

      <h2 className="text-xl font-semibold text-gray-900 mb-1">{title}</h2>
      <p className="text-sm text-gray-500 mb-3">
        {startMonth} · {duration}
      </p>

      <p className="text-purple-500 text-sm font-medium mb-2 flex items-center gap-1">
        <HiLightningBolt className="w-4 h-4" />
        Основы
      </p>

      <ul className="text-sm text-gray-700 space-y-1">
        <li className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-gray-500 w-4 h-4" />
          {location}
        </li>
        <li className="flex items-center gap-2">
          <FaLaptopCode className="text-gray-500 w-4 h-4" />
          {format}
        </li>
        <li className="flex items-center gap-2">
          <FaGlobe className="text-gray-500 w-4 h-4" />
          {language}
        </li>
      </ul>
    </div>
  );
};

export default CourseCard;

import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { ChevronLeft, ChevronRight } from "lucide-react"; 

interface SidebarProps<T extends string> {
  topics: T[];
  selectedTopic: T;
  onSelectTopic: (topic: T) => void;
  title?: string;
}

const Sidebar = <T extends string>({
  topics,
  selectedTopic,
  onSelectTopic,
  title = "Темы",
}: SidebarProps<T>) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white border rounded-full shadow p-1 z-10 hover:cursor-pointer"
      >
        {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
      </button>

      <aside
        className={twMerge(
          "bg-white p-6 h-full shadow-md transition-all duration-300",
          isOpen ? "w-64" : "w-0 overflow-hidden"
        )}
      >
        {isOpen && (
          <>
            <h2 className="text-xl lg:text-2xl font-bold mb-6 text-gray-800">
              {title}
            </h2>
            <ul className="flex flex-col gap-3">
              {topics.map((topic) => (
                <li
                  key={topic}
                  onClick={() => onSelectTopic(topic)}
                  className={twMerge(
                    "cursor-pointer px-3 py-2 rounded-xl text-gray-700 hover:bg-gray-100 transition",
                    topic === selectedTopic &&
                      "bg-gray-200 font-semibold text-black text-nowrap"
                  )}
                >
                  {topic}
                </li>
              ))}
            </ul>
          </>
        )}
      </aside>
    </div>
  );
};

export default Sidebar;

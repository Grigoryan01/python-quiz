import { twMerge } from "tailwind-merge";

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
  return (
    <aside className="w-64 bg-white p-6 shadow-md">
      <h2 className="text-xl lg:text-2xl font-bold mb-6 text-gray-800">{title}</h2>
      <ul className="flex flex-col gap-3">
        {topics.map((topic) => (
          <li
            key={topic}
            onClick={() => onSelectTopic(topic)}
          className={twMerge(
  "cursor-pointer px-3 py-2 rounded-xl text-gray-700 hover:bg-gray-100 transition",
  topic === selectedTopic && "bg-gray-200 font-semibold text-black text-nowrap"
)}
          >
            {topic}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;

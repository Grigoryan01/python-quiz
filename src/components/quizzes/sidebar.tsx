import { TopicName } from "@/data/questions";

interface SidebarProps {
  topics: TopicName[];
  selectedTopic: TopicName;
  onSelectTopic: (topic: TopicName) => void;
}

const Sidebar = ({ topics, selectedTopic, onSelectTopic }: SidebarProps) => {
  return (
    <aside className="w-64 bg-white  p-6 shadow-md">
      <h2 className="text-xl lg:text-2xl font-bold mb-6 text-gray-800">Темы</h2>
      <ul className="flex flex-col gap-3">
        {topics.map((topic) => (
          <li
            key={topic}
            onClick={() => onSelectTopic(topic)}
            className={`cursor-pointer px-3 py-2 rounded-xl text-gray-700 hover:bg-gray-100 transition ${
              topic === selectedTopic ? "bg-gray-200 font-semibold text-black" : ""
            }`}
          >
            {topic}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;

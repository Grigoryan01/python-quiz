'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../../../reusable/sidebar/sidebar";
import { lessons } from '../../../data/lessons';
import Progress from "../../../reusable/progress/progress";
import { ArrowLeft } from "lucide-react";

const topics = Object.keys(lessons);

const CoursePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visited, setVisited] = useState<Set<number>>(new Set());
  const router = useRouter();

  const selectedTopic = topics[currentIndex];
  const totalTopics = topics.length;
  const progressPercent = Math.round((visited.size / totalTopics) * 100);

  const addToVisited = (index: number) => {
    setVisited((prev) => {
      const updated = new Set(prev);
      updated.add(index);
      return updated;
    });
  };

  const removeFromVisited = (index: number) => {
    setVisited((prev) => {
      const updated = new Set(prev);
      updated.delete(index);
      return updated;
    });
  };

  const goToNext = () => {
    if (currentIndex < topics.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      addToVisited(nextIndex);
    }
  };

  const goToPrev = () => {
    if (currentIndex > 0) {
      removeFromVisited(currentIndex);
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar
        title="Темы лекций"
        topics={topics}
        selectedTopic={selectedTopic}
        onSelectTopic={(topic) => {
          const index = topics.indexOf(topic);
          setCurrentIndex(index);
          addToVisited(index);
        }}
      />

      <main className="flex-1 p-8 bg-gray-50 text-gray-800 flex flex-col justify-between">
        <div>
          {/* ← Назад */}
          <button
            onClick={() => router.back()}
            className="text-gray-700 mb-6 flex font-semibold items-center gap-2 hover:cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" /> Назад
          </button>

          <h1 className="text-2xl font-bold mb-4">{selectedTopic}</h1>
          <div className="text-lg leading-relaxed whitespace-pre-line mb-6">
            {lessons[selectedTopic as keyof typeof lessons]}
          </div>

          {/* Прогресс */}
          <div className="mb-4">
            <p className="text-sm text-gray-600 mb-1">{progressPercent}% пройдено</p>
            <Progress value={progressPercent} className="h-2" color="bg-blue-500" />
          </div>
        </div>

        {/* Кнопки перехода */}
        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={goToPrev}
            disabled={currentIndex === 0}
            className={`px-4 py-2 rounded-lg text-white transition ${
              currentIndex === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 hover:cursor-pointer'
            }`}
          >
            Назад
          </button>
          <button
            onClick={goToNext}
            disabled={currentIndex === topics.length - 1}
            className={`px-4 py-2 rounded-lg text-white transition ${
              currentIndex === topics.length - 1 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600 hover:cursor-pointer'
            }`}
          >
            Далее
          </button>
        </div>
      </main>
    </div>
  );
};

export default CoursePage;

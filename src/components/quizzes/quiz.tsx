'use client'

import { useState } from "react";
import Sidebar from "./sidebar";
import QuizContent from "./quizzes-content";
import { quizData, TopicName } from "@/data/questions";

const topics = Object.keys(quizData) as TopicName[];

const QuizPage = () => {
  const [selectedTopic, setSelectedTopic] = useState<TopicName>(topics[0]);

  return (
    <div className="flex min-h-screen">
      <Sidebar
        topics={topics}
        selectedTopic={selectedTopic}
        onSelectTopic={setSelectedTopic}
      />
      <QuizContent topic={selectedTopic} />
    </div>
  );
};

export default QuizPage;

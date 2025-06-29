'use client'

import { useRouter } from "next/navigation";
import { UserCircle } from "lucide-react";
import { useEffect, useState } from "react";

const courses = [
  {
    title: "Python Fundamentals",
    color: "bg-blue-500",
    link: "/course/python",
  }
];

const ProgressDashboard = () => {
  const router = useRouter();
    const [firstName, setFirstName] = useState<string | null>(null)

  useEffect(() => {
    const userData = localStorage.getItem('user')
    if (userData) {
      try {
        const parsed = JSON.parse(userData)
        setFirstName(parsed.firstName || null)
      } catch (error) {
        console.error('Ошибка парсинга user из localStorage:', error)
      }
    }
  }, [])

  return (
    <div className="p-6 space-y-6 text-black">
      <div className="flex items-center gap-4">
        <UserCircle className="w-10 h-10 text-blue-600" />
        <div>
          <h2 className="text-xl font-semibold"> {firstName ? firstName : 'Username'}</h2>
        </div>
      </div>

      <h2 className="text-xl lg:text-2xl font-semibold text-gray-700 mb-6">Обучение</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div
            key={course.title}
            className="bg-gray-200 p-6 rounded-2xl shadow hover:bg-gray-300 cursor-pointer transition"
            onClick={() => router.push(course.link)}
          >
            <h3 className="text-xl font-semibold text-black">{course.title}</h3>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressDashboard;

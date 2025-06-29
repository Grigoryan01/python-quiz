import CourseCard from '../../reusable/card/cards';
import {courses} from '../../data/coursesData'
const CoursesPage = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-[#f8faff]">
      {courses.map((course, index) => (
        <CourseCard key={index} {...course} isFree={true}/>
      ))}
    </div>
  );
};

export default CoursesPage;

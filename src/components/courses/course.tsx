import CourseCard from '../../reusable/card/cards';

const courses = [
  {
    title: 'Automated Testing in Java',
    startMonth: 'September',
    duration: '12 weeks',
    location: 'Lithuania',
    format: 'Training · Online',
    language: 'English',
  },
  {
    title: 'Automated Testing in .NET',
    startMonth: 'September',
    duration: '12 weeks',
    location: 'Lithuania',
    format: 'Training · Online',
    language: 'English',
  },
  {
    title: 'Automated Testing in JavaScript',
    startMonth: 'September',
    duration: '12 weeks',
    location: 'Lithuania',
    format: 'Training · Online',
    language: 'English',
  },
];

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

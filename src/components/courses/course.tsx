import CourseCard from '../../reusable/card/cards';
const courses = [
  {
    title: 'Automated Testing in Java',
    startMonth: 'September',
    duration: '12 weeks',
    location: 'Russia',
    format: 'Training · Online',
    language: 'Russian',
    isFree: true,
  },
  {
    title: 'Automated Testing in .NET',
    startMonth: 'October',
    duration: '10 weeks',
    location: 'Kazakhstan',
    format: 'Training · Online',
    language: 'English, Russian',
    isFree: true,
  },
  {
    title: 'Automated Testing in JavaScript',
    startMonth: 'August',
    duration: '9 weeks',
    location: 'Armenia',
    format: 'Training · Online',
    language: 'English, Russian, Armenian',
    isFree: true,
  },
  {
    title: 'Data Analysis with Python',
    startMonth: 'November',
    duration: '14 weeks',
    location: 'Germany',
    format: 'Bootcamp · In-person',
    language: 'German',
    isFree: false,
  },
  {
    title: 'Frontend Development with React',
    startMonth: 'September',
    duration: '7 weeks',
    location: 'Belarus',
    format: 'Training · Online',
    language: 'Russian',
    isFree: true,
  },
  {
    title: 'DevOps Essentials',
    startMonth: 'October',
    duration: '6 weeks',
    location: 'Poland',
    format: 'Training · Hybrid',
    language: 'English',
    isFree: true,
  },
  {
    title: 'Machine Learning Basics',
    startMonth: 'December',
    duration: '15 weeks',
    location: 'France',
    format: 'Bootcamp · Online',
    language: 'French',
    isFree: true,
  },
  {
    title: 'Introduction to Cybersecurity',
    startMonth: 'July',
    duration: '5 weeks',
    location: 'Netherlands',
    format: 'Course · Online',
    language: 'Dutch',
    isFree: true,
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

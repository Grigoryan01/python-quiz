import Image from 'next/image'
import PythonIcon from '../../images/icons/python.svg'


const ContactUsPage=()=>{
    const cardData = [
  {
    icon: PythonIcon,
    title: 'General Inquiries',
    text: 'Need help navigating the platform or understanding how quizzes work? Ask us anything!',
  },
  {
    icon: PythonIcon,
    title: 'Educational Help',
    text: 'Struggling with a quiz or concept? Our mentors can point you in the right direction.',
  },
  {
    icon: PythonIcon,
    title: 'Technical Support',
    text: 'Facing a bug or issue with your account? We’ll fix it fast.',
  },
  {
    icon: PythonIcon,
    title: 'Partnerships & Collaboration',
    text: 'Want to integrate your school or join us as a content creator? Let’s talk.',
  },
];

    return(
        <>  
        <h1 className='text-2xl lg:text-4xl font-bold'>Contact Us</h1>

        <h3 className='text-3xl font-bold uppercase'>Common reason to Contact Us</h3>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  {cardData.map((item, index) => (
    <div key={index} className="flex items-start gap-2.5 p-6">
      <Image src={item.icon} alt="Icon" className="w-12 h-12" />
      <div className="w-full  flex flex-col items-start">
        <h3 className="text-2xl font-semibold">{item.title}</h3>
        <p className="text-base font-normal ">
          {item.text}
        </p>
      </div>
    </div>
  ))}
</div>




        <h3 className='text-3xl font-bold uppercase'>Contact Methods</h3>

        <ul className="list-unordered">
            <li>
                <Image src={PythonIcon} alt="Email" className='w-4 h-4' />
                <p className="font-bold">Email</p> 
                <a href="mailto: support@pythonlearn.ru"> support@pythonlearn.ru</a>
                <p>Response time,within 24 hours on weekdays</p>
            </li>
             <li>
                <Image src={PythonIcon} alt="Telegram" className='w-4 h-4' />
                <p className="font-bold">Telegram Bot</p> 
                <a href="mailto: support@pythonlearn.ru">PythonLearnHelpBot</a>
                <p>Ask quick questions and get instant replies</p>
            </li>
              <li>
                <Image src={PythonIcon} alt="Feedback" className='w-4 h-4' />
                <p className="font-bold">Feedback form</p> 
                <a href="mailto: support@pythonlearn.ru"> support@pythonlearn.ru</a>
                <p>Response time,within 24 hours on weekdays</p>
            </li>
        </ul>
        </>
    )
}


export default ContactUsPage
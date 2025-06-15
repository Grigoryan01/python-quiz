import TwiiterIcon from '../../images/icons/twitter.svg'
import  GithubIcon from '../../images/icons/github.svg'
import LinkedinIcon from '../../images/icons/linkedin.svg'
import Image from 'next/image';
const Footer=()=> {
     const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col items-center gap-5 p-5 lg:flex-row lg:justify-between lg:p-12">
        <ul className='list-unstyled flex flex-col items-center lg:flex-row gap-5'>
            <li><a href="#" target="_blank" className='no-underline hover:cursor-pointer'>О платформе</a></li>
            <li><a href="#" target="_blank" className='no-underline hover:cursor-pointer'>Политика конфиденциальности</a></li>
        </ul>
        <div className="flex items-center gap-5">
            <Image src={TwiiterIcon} alt="Twitter" className="w-6 h-6 hover:cursor-pointer" />
            <Image src={LinkedinIcon} alt="LinkedIn" className="w-6 h-6 hover:cursor-pointer" />
            <Image src={GithubIcon} alt="Github" className="w-6 h-6 hover:cursor-pointer" />
        </div>
      <p>&copy; {currentYear}. All rights reserved.</p>
    </footer>
  );
}



export default Footer
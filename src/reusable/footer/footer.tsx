import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const Footer=()=> {
     const currentYear = new Date().getFullYear();
  return (
   <footer className="bg-gray-900 px-6 py-8 lg:px-12 flex flex-col items-center gap-6 lg:flex-row lg:justify-between text-sm text-gray-400">
  <ul className="flex flex-col items-center gap-4 lg:flex-row lg:gap-6">
    <li>
      <a
        href="/dashboard/about"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white font-medium hover:text-blue-400 hover:cursor-pointer transition-colors duration-200"
      >
        О платформе
      </a>
    </li>
    <li>
      <a
        href="/dashboard/privacy"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white font-medium hover:text-blue-400 hover:cursor-pointer transition-colors duration-200"
      >
        Политика конфиденциальности
      </a>
    </li>
  </ul>

  <div className="flex items-center gap-4">
<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
    <FaFacebookF className="w-6 h-6 text-white hover:text-blue-600 transition duration-200 cursor-pointer" />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <FaTwitter className="w-6 h-6 text-white hover:text-blue-600 transition duration-200 cursor-pointer" />
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
    <FaLinkedinIn className="w-6 h-6 text-white hover:text-blue-600 transition duration-200 cursor-pointer" />
  </a>
  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="w-6 h-6 text-white hover:text-blue-600 transition duration-200 cursor-pointer" />
  </a>
  </div>

  <p className="text-white font-medium hover:text-blue-400">&copy; {new Date().getFullYear()} Все права защищены.</p>
</footer>

  );
}



export default Footer
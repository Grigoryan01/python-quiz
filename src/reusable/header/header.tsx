"use client";

import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';
import PythonIcon from '../../images/icons/python.svg';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify'


const navigation = [
  { name: 'Главная', href: '/dashboard/home' },
  { name: 'Курсы', href: '/dashboard/courses' },
  { name: 'Контакты', href: '/dashboard/contact' },
  { name: 'О нас', href: '/dashboard/about' },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [firstName, setFirstName] = useState('');
  const router = useRouter();
 useEffect(() => {
  const loadUser = () => {
    const user = localStorage.getItem('user');
    if (user && user !== 'undefined') {
      try {
        const parsed = JSON.parse(user);
        setFirstName(parsed.firstName);
        setIsAuthenticated(true);
      } catch (err) {
        console.error('Failed to parse user JSON:', err);
        localStorage.removeItem('user');
        setIsAuthenticated(false);
      }
    } else {
      setIsAuthenticated(false);
    }
  };

  loadUser(); 

  window.addEventListener('storage', loadUser);

  return () => {
    window.removeEventListener('storage', loadUser);
  };
}, []);


const handleLogout = () => {
  toast.info('Вы вышли из аккаунта')
  localStorage.removeItem('user')
  setIsAuthenticated(false)
  setTimeout(() => {
    router.push('/dashboard/sign-in')
  }, 1500) // delay to let toast show
}


  return (
    <div>
      {/* Sidebar Mobile */}
      <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
        <DialogBackdrop className="fixed inset-0 bg-gray-900/80" />
        <div className="fixed inset-0 flex justify-end">
          <DialogPanel className="w-full max-w-xs bg-white p-4">
            <button onClick={() => setSidebarOpen(false)} className="text-gray-500 hover:text-gray-700 absolute top-4 right-4">
              <XMarkIcon className="h-6 w-6" />
            </button>
            <nav className="mt-10">
              <ul className="space-y-3">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-gray-700 hover:text-blue-600 block px-2 py-1 rounded">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              {!isAuthenticated ? (
                <div className="mt-6 space-y-2">
                  <a href="/dashboard/sign-in" className="block text-center border border-blue-600 text-blue-600 rounded-md px-4 py-2 hover:bg-blue-50">Войти</a>
                  <a href="/dashboard/sign-up" className="block text-center bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700">Регистрация</a>
                </div>
              ) : (
                <div className="mt-6">
                  <button onClick={handleLogout} className="w-full text-left px-2 py-1 text-red-600 hover:text-red-800 hover:cursor-pointer">Выйти</button>
                </div>
              )}
            </nav>
          </DialogPanel>
        </div>
      </Dialog>

      {/* Desktop Navbar */}
      <div className="hidden lg:flex items-center justify-between bg-white shadow px-6 py-4">
        <div className="flex items-center gap-3">
          <Image src={PythonIcon} alt="Logo" className="h-8 w-auto" />
          <h3 className="text-2xl font-bold">Python</h3>
        </div>
        <nav className="flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navigation.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="text-sm font-semibold text-gray-700 hover:text-blue-600">{item.name}</a>
              </li>
            ))}
          </ul>

          {!isAuthenticated ? (
            <>
              <a href="/dashboard/sign-in" className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50">Войти</a>
              <a href="/dashboard/sign-up" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Регистрация</a>
            </>
          ) : (
            <Menu as="div" className="relative">
              <MenuButton className="-m-1.5 flex items-center p-1.5 hover:cursor-pointer">
                <span className="sr-only">Open user menu</span>
               
                <span className="hidden lg:flex lg:items-center">
                  <span aria-hidden="true" className="text-sm font-semibold text-gray-900">
                    {firstName}
                  </span>
                  <ChevronDownIcon className="ml-2 size-5 text-gray-400" />
                </span>
              </MenuButton>
              <MenuItems className="absolute right-0 mt-2 w-40 bg-white border rounded-md shadow-md py-1 z-50">
                <MenuItem>
                  {({ active }) => (
                    <button
                      onClick={handleLogout}
                      className={classNames(
                        active ? 'bg-gray-100' : '',
                        'w-full text-left px-4 py-2 text-sm text-gray-700 hover:cursor-pointer'
                      )}
                    >
                      Выйти
                    </button>
                  )}
                </MenuItem>
              </MenuItems>
            </Menu>
          )}
        </nav>
      </div>

      {/* Mobile topbar */}
      <div className="lg:hidden flex justify-between items-center bg-white px-4 py-3 shadow">
        <div className="flex items-center gap-2">
          <Image src={PythonIcon} alt="Logo" className="h-8 w-auto" />
          <h3 className="text-2xl font-bold">Python</h3>
        </div>
        <button onClick={() => setSidebarOpen(true)} className="text-gray-700">
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>
    </div>

    
  );
};

export default Navbar;

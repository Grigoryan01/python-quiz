'use client'
import { useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  TransitionChild
} from '@headlessui/react'
import {
  Bars3Icon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import PythonIcon from '../../images/icons/python.svg'
import Image from 'next/image'
const navigation = [
  { name: 'Главная', href: '#', icon: HomeIcon, current: true },
  { name: 'Курсы', href: '#', icon: UsersIcon, current: false },
  { name: 'Контакты', href: '#', icon: FolderIcon, current: false },
  { name: 'О нас', href: '#', icon: FolderIcon, current: false },
]


function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  return (
    <>
 
      <div>
        <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
          />
          <div className="fixed inset-0 flex justify-end">
            <DialogPanel
              transition
              className="relative flex w-full  max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:translate-x-full"
            >
              <TransitionChild>
                <div className="absolute top-0 left-3/4 flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
                  <button type="button" onClick={() => setSidebarOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon aria-hidden="true" className="size-6" />
                  </button>
                </div>
              </TransitionChild>
              {/* Sidebar component, swap this element with another sidebar if you like */}
              <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 py-4">
                <nav className="flex flex-1 flex-col mt-11">
                  <ul role="list" className="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" className="-mx-2 space-y-1">
                        {navigation.map((item) => (
                          <li key={item.name}>
                            <a
                              href={item.href}
                              className={classNames(
                                item.current
                                  ? 'bg-gray-50 text-indigo-600'
                                  : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                                'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                              )}
                            >
                              <item.icon
                                aria-hidden="true"
                                className={classNames(
                                  item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                                  'size-6 shrink-0',
                                )}
                              />
                              {item.name}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </li>
                 
                
                  </ul>
                   <button type='button' className='text-white text-base rounded-md py-2 px-3 mb-4 bg-red-600 hover:cursor-pointer'>Войти</button>
            <button type='button' className='text-white text-base rounded-md py-2 px-3  bg-sky-600 hover:cursor-pointer'>Регистрация</button>
                </nav>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
        {/* Static sidebar for desktop */}
        <div className="hidden  lg:z-50 lg:flex lg:w-full ">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex items-center justify-between grow  gap-x-5  bg-white shadow-lg px-6 py-4">
            <div className="flex  shrink-0 items-center gap-2">
              <Image
                alt="Our Company"
                src={PythonIcon}
                className="h-8 w-auto"
              />
              <h3 className='text-3xl font-bold uppercase'>Python</h3>
            </div>
            <nav className="flex items-center gap-4"> 
                  <ul role="list" className="flex items-center gap-5">
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-50 text-indigo-600'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600',
                            'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold',
                          )}
                        >
                          <item.icon
                            aria-hidden="true"
                            className={classNames(
                              item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600',
                              'size-6 shrink-0',
                            )}
                          />
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
              <button type='button' className='text-white text-base rounded-md py-2 px-3 bg-red-600 hover:cursor-pointer'>Войти</button>
            <button type='button' className='text-white text-base rounded-md py-2 px-3  bg-sky-600 hover:cursor-pointer'>Регистрация</button>
            </nav>
          </div>
        </div>
        <div className="lg:hidden">
            
          <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center justify-between bg-white px-4 shadow-lg sm:px-6 lg:px-8">
              <div className="flex  shrink-0 items-center gap-2">
              <Image
                alt="Our Company"
                src={PythonIcon}
                className="h-8 w-auto"
              />
              <h3 className='text-3xl font-bold uppercase'>Python</h3>
            </div>
            <button type="button" onClick={() => setSidebarOpen(true)} className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
              <span className="sr-only">Open sidebar</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
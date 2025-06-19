'use client'
import Image from 'next/image'
import PythonIcon from '../../images/icons/python.svg'
import ProgressIcon from '../../images/photos/progress.png'
import VictoryIcon from '../../images/photos/victory.png'
import TargetIcon from '../../images/photos/target.png'

const HomePage = () => {
  const features = [
    {
      title: 'Викторины',
      text: 'Тестируйте свои знания по различным темам с помощью интерактивных викторин.',
      image: TargetIcon,
    },
    {
      title: 'Прогресс и уровни',
      text: 'Следите за своим развитием, проходите уровни и открывайте новые возможности.',
      image: ProgressIcon,
    },
    {
      title: 'Таблица лидеров',
      text: 'Соревнуйтесь с другими и поднимайтесь вверх в таблице лидеров.',
      image: VictoryIcon,
    },
  ]

  return (
    <div className="flex flex-col items-center gap-16 px-6 py-12 lg:px-24">
      {/* Hero Section */}
      <div className="flex flex-col items-center gap-8 md:flex-row lg:gap-16 w-full">
        <div className="flex flex-col items-center md:items-start gap-6 max-w-xl">
          <p className="text-3xl lg:text-5xl font-semibold leading-snug text-center md:text-left text-gray-900">
            Изучай Python шаг за шагом с викторинами и достижениями
          </p>
          <button
            type="button"
            className="bg-blue-600 text-white text-base font-medium rounded-md px-4 py-2 hover:bg-blue-700 hover:cursor-pointer transition duration-200"
          >
            Начать обучение
          </button>
        </div>

        <div className="w-full max-w-sm bg-blue-50 rounded-2xl p-6 shadow-md">
          <Image src={PythonIcon} alt="Python" className="w-full h-auto object-contain" />
        </div>
      </div>

      {/* Features Section */}
      <div className="grid gap-8 w-full lg:grid-cols-3">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-200 bg-white hover:cursor-pointer">
            <div className="bg-blue-100 w-full h-56 flex items-center justify-center p-6">
              <Image src={feature.image} alt={feature.title} className="w-28 h-24 object-contain" />
            </div>
            <div className="p-6 text-center flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage

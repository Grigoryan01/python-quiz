import Image from 'next/image'
import PythonIcon from '../../images/icons/python.svg'
const HomePage=()=>{
    const features = [
  {
    title: 'Викторины',
    text: 'Тестируйте свои знания по различным темам с помощью интерактивных викторин.',
    image: PythonIcon,
  },
  {
    title: 'Прогресс и уровни',
    text: 'Следите за своим развитием, проходите уровни и открывайте новые возможности.',
    image: PythonIcon,
  },
  {
    title: 'Таблица лидеров ',
    text: 'Соревнуйтесь с другими и поднимайтесь вверх в таблице лидеров.',
    image: PythonIcon,
  },
]

    return(
<div className="flex flex-col items-center gap-12 px-24 py-11">
<div className="flex flex-col items-center gap-6 md:flex-row lg:gap-12">
    <div className="flex flex-col items-center md:items-start gap-6 min-w-56 w-full max-w-sm">
        <p className="text-3xl text-center lg:text-5xl lg:text-left font-semibold leading-[50px]">Изучай Python шаг за шагом с викторинами и достижениями</p>
        <button type='button' className='max-w-max text-white text-base rounded-md py-2 px-4  bg-sky-600 hover:cursor-pointer'>Начать обучение</button>

    </div>

    <div className='bg-red-600 rounded-2xl w-full max-w-96 p-6'>
        <Image src={PythonIcon} alt="Python" className='w-full'/>
    </div>
</div>

<div className='flex flex-col items-center gap-6 lg:flex-row lg:justify-between'>
       {features.map((feature, index) => (
    <div key={index} className="rounded-tl-2xl rounded-tr-2xl">
      <div className="bg-sky-400 p-6 w-full max-w-96 h-64 rounded-tl-2xl rounded-tr-2xl">
        <Image src={feature.image} alt={feature.title} className="w-full h-full object-contain" />
      </div>
      <div className="w-full max-w-96 h-44 flex flex-col text-center items-center gap-5 rounded-bl-2xl rounded-br-2xl border border-solid border-gray-600 p-6">
        <h3 className="text-2xl font-semibold">{feature.title}</h3>
        <p className="text-base font-normal truncate w-full overflow-hidden whitespace-nowrap">{feature.text}</p>
      </div>
    </div>
  ))}
</div>
</div>
    )
}

export default HomePage
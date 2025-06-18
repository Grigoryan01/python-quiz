import { FaEnvelope, FaBookOpen, FaTools, FaHandshake, FaTelegramPlane, FaRegCommentDots } from 'react-icons/fa'

const ContactUsPage = () => {
  const cardData = [
    {
      icon: FaEnvelope,
      title: 'Общие вопросы',
      text: 'Нужна помощь с навигацией по платформе или пониманием викторин? Спросите нас!',
    },
    {
      icon: FaBookOpen,
      title: 'Образовательная помощь',
      text: 'Трудности с викториной или понятием? Наши наставники помогут разобраться.',
    },
    {
      icon: FaTools,
      title: 'Техническая поддержка',
      text: 'Проблемы или ошибки в аккаунте? Мы быстро всё исправим.',
    },
    {
      icon: FaHandshake,
      title: 'Партнёрство и сотрудничество',
      text: 'Хотите интегрировать школу или стать создателем контента? Давайте обсудим.',
    },
  ]

  const contactMethods = [
    {
      icon: FaEnvelope,
      title: 'Электронная почта',
      link: 'mailto:support@pythonlearn.ru',
      display: 'support@pythonlearn.ru',
      description: 'Время ответа: в течение 24 часов в будние дни',
    },
    {
      icon: FaTelegramPlane,
      title: 'Телеграм-бот',
      link: 'https://t.me/PythonLearnHelpBot',
      display: '@PythonLearnHelpBot',
      description: 'Задавайте быстрые вопросы и получайте мгновенные ответы',
    },
    {
      icon: FaRegCommentDots,
      title: 'Форма обратной связи',
      link: 'mailto:support@pythonlearn.ru',
      display: 'support@pythonlearn.ru',
      description: 'Время ответа: в течение 24 часов в будние дни',
    },
  ]

  return (
    <section className="max-w-7xl mx-auto p-6 space-y-12">
      <header className="space-y-4">
        <h1 className="text-2xl lg:text-3xl font-bold text-gray-700">Связаться с нами</h1>
        <h2 className="text-xl lg:text-2xl font-semibold  text-gray-700">
          Частые причины обращения
        </h2>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {cardData.map(({ icon: Icon, title, text }, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          >
            <div className="text-blue-600 w-12 h-12 flex items-center justify-center text-4xl flex-shrink-0">
              <Icon />
            </div>
            <div>
              <h3 className="text-2xl text-gray-700 font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{text}</p>
            </div>
          </div>
        ))}
      </div>

      <section>
        <h2 className="text-xl lg:text-2xl font-semibold  text-gray-700 mb-6">Способы связи</h2>
        <ul className="space-y-6 max-w-md">
          {contactMethods.map(({ icon: Icon, title, link, display, description }, index) => (
            <li key={index} className="flex items-center gap-3">
              <div className="text-blue-600 w-6 h-6 flex items-center justify-center text-xl flex-shrink-0">
                <Icon />
              </div>
              <div>
                <p className="font-bold text-lg text-gray-700">{title}</p>
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {display}
                </a>
                <p className="text-gray-600 text-sm">{description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </section>
  )
}

export default ContactUsPage

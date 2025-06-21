import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const PrivacyPage = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-12 text-gray-800">
      <section className="space-y-4">
        <h2 className="text-xl lg:text-2xl font-bold">Информация, которую мы собираем</h2>
        <p className="text-lg">Мы можем собирать:</p>
        <ul className="list-disc list-inside text-lg space-y-1">
          <li><strong>Личные данные</strong> — имя пользователя, адрес электронной почты, пароль.</li>
          <li><strong>Технические данные</strong> — IP-адрес, тип устройства, браузер, язык, файлы cookie.</li>
          <li><strong>Данные об активности</strong> — история использования платформы, прогресс в викторинах, ответы.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl lg:text-2xl font-bold">Как мы используем вашу информацию</h2>
        <p className="text-lg">Мы используем собранные данные для:</p>
        <ul className="list-disc list-inside text-lg space-y-1">
          <li>предоставления доступа к платформе и её функциям;</li>
          <li>отображения индивидуального прогресса в обучении;</li>
          <li>обратной связи и уведомлений;</li>
          <li>улучшения работы сервиса;</li>
          <li>соблюдения юридических обязательств.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl lg:text-2xl font-bold">Раскрытие информации третьим лицам</h2>
        <p className="text-lg">
          Мы не <strong>продаём и не передаём</strong> ваши личные данные третьим лицам, за исключением следующих случаев:
        </p>
        <ul className="list-disc list-inside text-lg space-y-1">
          <li>по требованию закона;</li>
          <li>при наличии согласия пользователя;</li>
          <li>для обеспечения безопасности и предотвращения мошенничества.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl lg:text-2xl font-bold">Безопасность данных</h2>
        <p className="text-lg">
          Мы применяем разумные технические и организационные меры для защиты данных. Однако ни один способ передачи информации через интернет не может гарантировать абсолютную безопасность.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl lg:text-2xl font-bold">Ваши права</h2>
        <ul className="list-disc list-inside text-lg space-y-1">
          <li>запросить копию своих данных;</li>
          <li>обновить или удалить свою информацию;</li>
          <li>отказаться от рассылки;</li>
          <li>подать жалобу в контролирующие органы.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl lg:text-2xl font-bold">Использование файлов cookie</h2>
        <p className="text-lg">Мы используем cookies для:</p>
        <ul className="list-disc list-inside text-lg space-y-1">
          <li>авторизации пользователей;</li>
          <li>аналитики поведения;</li>
          <li>запоминания ваших предпочтений.</li>
        </ul>
        <p className="text-lg">
          Вы можете отключить cookies в настройках браузера, однако это может ограничить функциональность сайта.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl lg:text-2xl font-bold">Изменения в политике конфиденциальности</h2>
        <p className="text-lg">
          Мы оставляем за собой право изменять настоящую Политику. Актуальная версия всегда доступна на этой странице. Продолжая использовать сайт, вы соглашаетесь с условиями обновлённой Политики.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl lg:text-2xl font-bold">Контакты</h2>
        <p className="text-lg">Если у вас есть вопросы или вы хотите воспользоваться своими правами, свяжитесь с нами:</p>
        <ul className="text-lg space-y-4">
          <li className="flex items-center gap-2">
            <FaEnvelope className="text-gray-500 w-5 h-5" />
            <strong>Email:</strong>
            <a href="mailto:support@pythonlearn.ru" className="text-blue-600 hover:cursor-pointer">support@pythonlearn.ru</a>
          </li>
          <li className="flex items-center gap-2">
            <FaPhoneAlt className="text-gray-500 w-5 h-5" />
            <strong>Телефон:</strong>
            <a href="tel:+70000000000" className="text-blue-600 hover:cursor-pointer">+7 (000) 000-00-00</a>
          </li>
          <li className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-gray-500 w-5 h-5" />
            <strong>Адрес:</strong>
            г. Москва, ул. Питонская, д. 1
          </li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPage;

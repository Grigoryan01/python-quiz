const AboutUsPage = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 flex flex-col gap-10 text-gray-800">
      <section>
        <h1 className="text-xl lg:text-3xl font-bold mb-4">О нашей платформе</h1>
        <p className="text-lg leading-relaxed">
          Наша платформа создана для того, чтобы сделать изучение Python доступным, интересным и эффективным для всех — от новичков до опытных программистов.
        </p>
      </section>

      <section>
        <h1 className="text-xl lg:text-3xl font-bold mb-4">Что мы предлагаем</h1>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Интерактивные викторины для проверки знаний</li>
          <li>Прогресс и уровни для мотивации и развития</li>
          <li>Таблицу лидеров, чтобы соревноваться и вдохновляться</li>
        </ul>
      </section>

      <section>
        <h1 className="text-xl lg:text-3xl font-bold mb-4">Наша миссия</h1>
        <p className="text-lg mb-4">
          Мы хотим создать сообщество, где каждый сможет легко и с удовольствием изучать Python, улучшать навыки и достигать своих целей.
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Поддержка новичков в обучении</li>
          <li>Обеспечение качественного контента</li>
          <li>Создание мотивирующей среды для саморазвития</li>
        </ul>
      </section>

      <section>
        <h1 className="text-xl lg:text-3xl font-bold mb-4">Наша команда</h1>
        <p className="text-lg mb-4">
          В нашей команде работают опытные разработчики, методисты и дизайнеры, которые делают платформу удобной и полезной.
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Эльмира Григорян — основатель и ведущий разработчик</li>
          <li>Алексей Иванов — менеджер проекта</li>
          <li>Мария Смирнова — контент-менеджер</li>
        </ul>
      </section>

      <section>
        <h1 className="text-xl lg:text-3xl font-bold mb-4">Почему выбирают нас</h1>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Интуитивно понятный интерфейс</li>
          <li>Разнообразные учебные материалы</li>
          <li>Поддержка и обратная связь в любое время</li>
        </ul>
      </section>

      <section>
        <h1 className="text-xl lg:text-3xl font-bold mb-4">Наши ценности</h1>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>Открытость и честность</li>
          <li>Постоянное развитие и обучение</li>
          <li>Взаимная поддержка в сообществе</li>
        </ul>
      </section>

      <section>
        <h1 className="text-xl lg:text-3xl font-bold mb-4">Присоединяйтесь к нам!</h1>
        <p className="text-lg">
          Будь вы новичок, преподаватель или профи — добро пожаловать! Вместе мы создаём платформу, где Python учат с интересом.
        </p>
      </section>
    </div>
  )
}

export default AboutUsPage
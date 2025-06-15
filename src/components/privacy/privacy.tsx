const PrivacyPage=()=>{
    return(
        <div className="flex flex-col items-start gap-6">
            <div className='flex flex-col gap-4 lg:gap-6'>
                <h1 className='text-2xl lg:text-4xl
font-bold'>Информация, которую мы собираем</h1>
                <p className='text-lg font-normal'>Мы можем собирать:
                <ul className='list-disc list-inside'>
                    <li><span className="font-bold">Личные
данные</span> — имя пользователя, адрес электронной почты,
пароль.</li>
                    <li><span className="font-bold">Технические
данные</span> — IP-адрес, тип устройства, браузер, язык, файлы
cookie.</li>
                    <li><span className="font-bold">Данные об
активности </span> — история использования платформы, прогресс в
викторинах, ответы.</li>
                </ul>
                </p>
            </div>

               <div className='flex flex-col gap-4 lg:gap-6'>
                <h1 className='text-2xl lg:text-4xl font-bold'> Как мы
используем вашу информацию</h1>
                <p className='text-lg font-normal'>Мы используем
собранные данные для:
                     <ul className='list-disc list-inside'>
                        <li>предоставления доступа к платформе и её
функциям;</li>
                        <li>отображения индивидуального прогресса в
обучении;</li>
                        <li>обратной связи и уведомлений;</li>
                        <li>улучшения работы сервиса;</li>
                        <li>соблюдения юридических обязательств.</li>
                </ul>
                </p>
            </div>


             <div className='flex flex-col gap-4 lg:gap-6'>
                <h1 className='text-2xl lg:text-4xl
font-bold'>Раскрытие информации третьим лицам</h1>
                <p className='text-lg font-normal'>Мы не <span
className="font-bold">продаём и не передаём</span> ваши личные данные
третьим лицам, за исключением следующих случаев:
                     <ul className='list-disc list-inside'>
                    <li>запросить копию своих данных;</li>
                    <li>обновить или удалить свою информацию;</li>
                    <li>отказаться от рассылки;</li>
                    <li>подать жалобу в контролирующие органы.</li>

                </ul>
                </p>
            </div>



              <div className='flex flex-col gap-4 lg:gap-6'>
                <h1 className='text-2xl lg:text-4xl
font-bold'>Безопасность данных</h1>
                <p className='text-lg font-normal'>
              Мы применяем разумные технические и организационные меры
для защиты данных. Однако ни один способ передачи информации через
интернет не может гарантировать абсолютную безопасность.
                </p>
            </div>



              <div className='flex flex-col gap-4 lg:gap-6'>
                <h1 className='text-2xl lg:text-4xl font-bold'>Ваши права</h1>
                <p className='text-lg font-normal'>Вы имеете право:
                     <ul className='list-disc list-inside'>
                    <li>запросить копию своих данных;</li>
                    <li>обновить или удалить свою информацию;</li>
                    <li>отказаться от рассылки;</li>
                    <li>подать жалобу в контролирующие органы.</li>

                </ul>
                </p>
            </div>



              <div className='flex flex-col gap-4 lg:gap-6'>
                <h1 className='text-2xl lg:text-4xl
font-bold'>Использование файлов cookie</h1>
                <p className='text-lg font-normal'>Мы используем cookies для:
                     <ul className='list-disc list-inside'>
                    <li>авторизации пользователей;</li>
                    <li>аналитики поведения;</li>
                    <li>запоминания ваших предпочтений.</li>
                </ul>
                </p>
                 <p className='text-lg font-normal'>Вы можете
отключить cookies в настройках браузера, однако это может ограничить
функциональность сайта.</p>
            </div>


                <div className='flex flex-col gap-4 lg:gap-6'>
                <h1 className='text-2xl lg:text-4xl font-bold'>
Изменения в политике конфиденциальности</h1>
                <p className='text-lg font-normal'>
                Мы оставляем за собой право изменять настоящую
Политику. Актуальная версия всегда доступна на этой странице.
Продолжая использовать сайт, вы соглашаетесь с условиями обновлённой
Политики.
                </p>
            </div>


                <div className='flex flex-col gap-4 lg:gap-6'>
                <h1 className='text-2xl lg:text-4xl font-bold'>Контакты</h1>
                <p className='text-lg font-normal'>Если у вас есть
вопросы или вы хотите воспользоваться своими правами, свяжитесь с
нами:
                     <ul className='list-unstyled'>
                    <li className="flex gap-1 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg>
                        <span className="font-bold">Email</span> —<a
href="mailto: support@pythonlearn.ru"> support@pythonlearn.ru</a>
</li>
                    <li className="flex items-center gap-1"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"/>
</svg><span className="font-bold">Телефон</span> —<a
href="tel: +7 (000) 000-00-00"> +7 (000) 000-00-00</a> </li>
                    <li className="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg><span className="font-bold">Адрес: </span> —
г. Москва, ул. Питонская, д. 1</li>
                </ul>
                </p>
            </div>
        </div>
    )
}


export default PrivacyPage;
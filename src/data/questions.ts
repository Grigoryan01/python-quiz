export const quizData = {
  "Основы Python": [
    {
      question: "Что такое переменная в Python?",
      options: ["Тип данных", "Место хранения информации", "Цикл", "Функция"],
      answer: "Место хранения информации",
    },
    {
      question: "Как объявить переменную?",
      options: ["let x = 5", "x := 5", "x = 5", "def x = 5"],
      answer: "x = 5",
    },
    {
      question: "Какой символ используется для комментария в Python?",
      options: ["//", "#", "--", "/* */"],
      answer: "#",
    },
  ],
  "Простые типы данных": [
    {
      question: "Какой тип данных для целых чисел?",
      options: ["float", "int", "str", "bool"],
      answer: "int",
    },
    {
      question: "Какой тип данных обозначает строку?",
      options: ["int", "bool", "str", "float"],
      answer: "str",
    },
    {
      question: "Что возвращает функция `type(42)`?",
      options: ["int", "<class 'int'>", "число", "integer"],
      answer: "<class 'int'>",
    },
  ],
  "Коллекции": [
    {
      question: "Что такое список?",
      options: ["Условие", "Целое число", "Упорядоченная коллекция", "Цикл"],
      answer: "Упорядоченная коллекция",
    },
    {
      question: "Как создать кортеж?",
      options: ["[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "<1, 2, 3>"],
      answer: "(1, 2, 3)",
    },
    {
      question: "Какой метод добавляет элемент в список?",
      options: [".add()", ".append()", ".insert()", ".push()"],
      answer: ".append()",
    },
  ],
  "Функции": [
    {
      question: "Как объявить функцию?",
      options: ["function myFunc()", "def myFunc():", "fun myFunc()", "define myFunc()"],
      answer: "def myFunc():",
    },
    {
      question: "Что делает оператор return?",
      options: ["Выводит значение", "Завершает функцию", "Возвращает значение", "Ничего не делает"],
      answer: "Возвращает значение",
    },
    {
      question: "Можно ли вызвать функцию внутри другой функции?",
      options: ["Нет", "Да", "Только в классе", "Только в цикле"],
      answer: "Да",
    },
  ],
  "Итераторы и генераторы": [
    {
      question: "Что делает `yield`?",
      options: [
        "Создаёт переменную",
        "Вызывает ошибку",
        "Завершает программу",
        "Возвращает значение и сохраняет состояние генератора",
      ],
      answer: "Возвращает значение и сохраняет состояние генератора",
    },
    {
      question: "Что делает `iter()`?",
      options: ["Создает цикл", "Преобразует в итератор", "Вызывает функцию", "Создает генератор"],
      answer: "Преобразует в итератор",
    },
    {
      question: "Что делает `next()`?",
      options: ["Начинает цикл", "Возвращает следующий элемент", "Прекращает итерацию", "Вызывает функцию"],
      answer: "Возвращает следующий элемент",
    },
  ],
  "Модули": [
    {
      question: "Как импортировать модуль?",
      options: ["include os", "import os", "using os", "require(os)"],
      answer: "import os",
    },
    {
      question: "Как импортировать только функцию из модуля?",
      options: [
        "import random.choice",
        "from random import choice",
        "require choice from random",
        "choice = import(random)",
      ],
      answer: "from random import choice",
    },
    {
      question: "Как посмотреть доступные функции модуля?",
      options: ["show(module)", "module.list()", "dir(module)", "module.functions()"],
      answer: "dir(module)",
    },
  ],
} as const;

// Типы
export type QuizData = typeof quizData;
export type TopicName = keyof QuizData;
export type Question = QuizData[TopicName][number];

export type Question = {
    question: string;
    answers: { text: string; correct: boolean }[];
};

export const quiz: Question[] = [
    {
        question: "Что такое операционная система?",
        answers: [
            { text: "Это просто программа на компьютере, как и другие - Word или Chrome", correct: false },
            { text: "Это показатель того, какой процессор используется на компьютере. Например, 32-битный или 64-битный", correct: false },
            { text: "Это набор взаимосвязанных программ, осуществляющих управление компьютером и взаимодействие с пользователем", correct: true },
            { text: 'Нет такого понятия, есть понятие "файловая система"', correct: false },
        ],
    },
    {
        question: "Является ли Android операционной системой?",
        answers: [
            { text: "Да, это такая же ОС, как и другие, просто для мобильных девайсов", correct: true },
            { text: "Нет, операционные системы бывают только для ПК", correct: false },
            { text: "Нет, Android это программа, которая ставится на операционную систему девайса. ОС на разных девайсах разные", correct: false },
            { text: "Это домашняя страничка в настройках вашего браузера", correct: false },
        ],
    },
    {
        question: "Что такое процессор компьютера?",
        answers: [
            { text: "Это блок, внутри которого находится дисковод и много разъемов для монитора, клавиатуры и компьютерной мышки", correct: false },
            { text: "Это общее название всех комплектующих компьютера", correct: false },
            { text: "Это элемент компьютера, с помощью которого обрабатывается информация, находящаяся как в собственной памяти, так и в памяти других устройств", correct: true },
            { text: "Это суммарный показатель вычислительной мощности компьютера, например 2,7 ГГц", correct: false },
        ],
    },
    {
        question: "Какие бывают разрядности у современных процессоров?",
        answers: [
            { text: "32 и 64 бита", correct: true },
            { text: "12 и 32 бита", correct: false },
            { text: "15 и 32 бита", correct: false },
            { text: "86 и 64 бита", correct: false },
        ],
    },
    {
        question: "Какой тип процессора чаще всего используют мобильные девайсы?",
        answers: [
            { text: "iOS использует Intel, остальные используют AMD", correct: false },
            { text: "Чаще всего используют Intel", correct: false },
            { text: "Чаще всего используют AMD", correct: false },
            { text: "Чаще всего используют ARM", correct: true },
        ],
    },
    {
        question: "Для чего компьютеру нужна RAM?",
        answers: [
            { text: "Для быстрого доступа к данным", correct: true },
            { text: "Для долгосрочного хранения данных", correct: false },
            { text: "Для правильной фрагментации памяти", correct: false },
            { text: "Для дефрагментации данных", correct: false },
        ],
    },
    {
        question: "Чем отличается HDD от SSD?",
        answers: [
            { text: "HDD - это твердотельный накопитель без подвижных частей. Более дешевый, чем SSD. HDD работает быстрее", correct: false },
            { text: "HDD - это твердотельный накопитель без подвижных частей. Более дорогой, чем SSD. HDD работает быстрее", correct: false },
            { text: "SSD - это твердотельный накопитель без подвижных частей. Более дешевый, чем HDD. SSD работает быстрее", correct: false },
            { text: "SSD - это твердотельный накопитель без подвижных частей. Более дорогой, чем HDD. SSD работает быстрее", correct: true },
        ],
    },
    {
        question: "Как отличаются между собой USB?",
        answers: [
            { text: "Бывают только USB 2.0 и 3.2", correct: false },
            { text: "Бывают только micro-USB и mini-USB", correct: false },
            { text: "USB отличаются по пропускной способности (micro-USB, mini-USB, lightning и т.д.) и форме (USB 2.0, USB 3.2).", correct: false },
            { text: "USB отличаются по форме (micro-USB, mini-USB, lightning и т.д.) и пропускной способности (USB 2.0, USB 3.2)", correct: true },
        ],
    },
    {
        question: "Какой файловой системы не существует?",
        answers: [
            { text: "Fat", correct: false },
            { text: "NTFS", correct: false },
            { text: "APFS", correct: false },
            { text: "BolSFS", correct: true },
        ],
    },
];

export default quiz;

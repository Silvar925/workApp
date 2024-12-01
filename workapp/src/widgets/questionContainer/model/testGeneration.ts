import quiz from './questions';
import { Question } from './questions';

function shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Меняем местами элементы
    }
    return shuffled;
}

export default function testGeneration(questionCount?: number): Question[] {
    // Перемешиваем вопросы
    const shuffledQuestions = shuffleArray(quiz);

    // Если задано количество вопросов, обрезаем массив
    const selectedQuestions = questionCount ? shuffledQuestions.slice(0, questionCount) : shuffledQuestions;

    // Перемешиваем ответы в каждом вопросе
    return selectedQuestions.map((question) => ({
        ...question,  // Оставляем остальные свойства вопроса
        answers: shuffleArray(question.answers)  // Перемешиваем ответы
    }));
}

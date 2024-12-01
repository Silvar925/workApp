import { useState, useEffect } from "react";
import styles from "./QuestionContainer.module.scss";
import { RadioButton } from "../../../shared/radioButton";
import { ProgressBar } from "../../../features/ProgressBar";
import { Question } from "../../../widgets/questionContainer/model/questions";

interface Props {
    test: Question[];
    currentQuestionIndex: number; 
    onAnswerSelect: (answer: object, question: string) => void; 
}

const QuestionContainer: React.FC<Props> = ({ test, currentQuestionIndex, onAnswerSelect }) => {
    const question = test[currentQuestionIndex];

    const [selectedAnswerId, setSelectedAnswerId] = useState<string | null>(null);

    useEffect(() => {
        setSelectedAnswerId(null); 
    }, [currentQuestionIndex]); 

    const handleAnswerSelect = (answerId: string, answer: object, questionText: string) => {
        setSelectedAnswerId(answerId); 
        onAnswerSelect(answer, questionText);
    };

    return (
        <section className={styles.questionContainer}>
            <div className={styles.questionContainer__content}>
                <header className={styles.questionContainer__header}>
                    <h3>{question.question}</h3>
                </header>

                <ul className={styles.questionContainer__answers}>
                    {question.answers.map((answer, index) => (
                        <li key={index}>
                            <RadioButton
                                id={`answer-${index}`}
                                name={`question-${currentQuestionIndex}`}
                                label={answer.text}
                                checked={selectedAnswerId === `answer-${index}`} 
                                onChange={() => handleAnswerSelect(`answer-${index}`, answer, question.question)}
                            />
                        </li>
                    ))}
                </ul>
            </div>

            <ProgressBar
                min={0}
                max={test.length} 
                value={currentQuestionIndex + 1} 
            />
        </section>
    );
};

export default QuestionContainer;

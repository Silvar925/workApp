import { useState } from "react";
import { QuestionContainer } from "../../../widgets/questionContainer";
import { BlueButton } from "../../../shared/blueButton";
import { Result } from "../../result";
import testGeneration from "../../../widgets/questionContainer/model/testGeneration";
import { quizAnswer } from "../model/saveResult";
import styles from "./Testing.module.scss";

const Testing: React.FC = () => {
    const [layout, setLayout] = useState('home');
    const [test, setTest] = useState<any[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);  

    const clickHandler = () => {
        const generatedTest = testGeneration();
        setLayout('test'); 
        setTest(generatedTest);
    };

    
    const onAnswerSelect = (selectedAnswer: object, question: string) => {
        quizAnswer.push({
            'question': question,
            'answer': selectedAnswer
        });

    
        if (currentQuestionIndex < test.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1); 
        } else {
            console.log("Тест завершен!");
            setLayout('result'); 
        }
    };

    switch (layout) {
        case 'home':
            return (
                <div className={styles.testing}>
                    <div className={styles.testing__container}>
                        <BlueButton onClick={clickHandler}>Тест</BlueButton>
                    </div>
                </div>
            );

        case 'test':
            return (
                <div className={styles.testing}>
                    <section className={styles.testing__section}>
                        <header className={styles.testing__header}>
                            <h2 className={styles.testing__title}>Тестирование</h2>
                        </header>
                        {test.length > 0 && (
                            <QuestionContainer
                                test={test}
                                currentQuestionIndex={currentQuestionIndex}
                                onAnswerSelect={onAnswerSelect}
                            />
                        )}
                    </section>
                </div>
            );

        case 'result':
            return (
                <Result answer={quizAnswer} setLayout={setLayout} setCurrentQuestionIndex={setCurrentQuestionIndex} />
            )
    }
};

export default Testing;

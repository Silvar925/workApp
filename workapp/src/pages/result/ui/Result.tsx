import styles from "./Result.module.scss";
import { QuestionBox } from "../../../features/QuestionBox";
import { BlueButton } from "../../../shared/blueButton";
import calculatePoints from "../model/calculatePoints";
import ResultTittle from "./resultTitle/ResultTitle";

interface Prop {
    answer: object[];  
    setLayout: React.Dispatch<React.SetStateAction<string>>;
    setCurrentQuestionIndex: React.Dispatch<React.SetStateAction<number>>;
}

const Result: React.FC<Prop> = ({ answer, setLayout, setCurrentQuestionIndex }) => {
    const clickHandler = () => {
        setLayout('home');
        setCurrentQuestionIndex(0);
    };

    const points = calculatePoints(answer);

    return (
        <div className={styles.result}>
            <div className={styles.result__box}>
                <ResultTittle point={points} />

                <ul className={styles.result__list}>
                    {answer.map((item, index) => (
                        <li key={index} className={styles.result__listItem}>
                            <QuestionBox
                                question={(item as any).question}  
                                answer={(item as any).answer.text}  
                                isCorrect={(item as any).answer.correct}  
                            />
                        </li>
                    ))}
                </ul>

                <div className={styles.result__buttonBox}>
                    <BlueButton onClick={clickHandler}>Вернуться домой</BlueButton>
                </div>
            </div>
        </div>
    );
};

export { Result };

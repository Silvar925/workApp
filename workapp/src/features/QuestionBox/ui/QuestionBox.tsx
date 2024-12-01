import styles from "./QuestionBox.module.scss";

interface Props {
    question: string;
    answer: string;
    isCorrect: boolean;
}

const QuestionBox: React.FC<Props> = ({ question, answer, isCorrect }) => {
    return (
        <article className={`${styles.questionBox} ${isCorrect ? styles.questionBox_correct : styles.questionBox_incorrect}`}>
            <h2 className={styles.questionBox__title}>{question}</h2>
            <p className={styles.questionBox__answer}>{answer}</p>
        </article>
    );
};

export default QuestionBox;

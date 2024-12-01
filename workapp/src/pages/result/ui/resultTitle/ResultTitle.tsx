import styles from "./ResultTitle.module.scss";

interface Props {
    point: number;
}

const ResultTitle: React.FC<Props> = ({ point }) => {
    if (point === 9) {
        return (
            <header className={styles.resultTitle}>
                <h2 className={styles.resultTitle__header}>Поздравляем!</h2>
                <div className={styles.resultTitle__message}>
                    <p>Вы правильно ответили на все вопросы.</p>
                    <p>Вы действительно отлично разбираетесь в IT.</p>
                </div>
            </header>
        );
    } else if (point < 9 && point > 0) {
        return (
            <header className={styles.resultTitle}>
                <h2 className={styles.resultTitle__header}>Хороший результат!</h2>
                <div className={styles.resultTitle__message}>
                    <p>Вы ответили правильно на {point} вопросов.</p>
                    <p>Так держать!</p>
                </div>
            </header>
        );
    } else if (point === 0) {
        return (
            <header className={styles.resultTitle}>
                <h2 className={styles.resultTitle__header}>Упс:(</h2>
                <div className={styles.resultTitle__message}>
                    <p>Вы неправильно ответили на все вопросы.</p>
                    <p>Нужно подучить теорию.</p>
                </div>
            </header>
        );
    }
}

export default ResultTitle;

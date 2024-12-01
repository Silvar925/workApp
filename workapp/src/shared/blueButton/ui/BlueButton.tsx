import styles from "./BlueButton.module.scss"

interface props {
    children: React.ReactNode;
    onClick: () => void
}

const BlueButton: React.FC<props> = ({ children, onClick }) => {
    return (
        <button className={styles.button} onClick={onClick}>{children}</button>
    );
};

export default BlueButton;
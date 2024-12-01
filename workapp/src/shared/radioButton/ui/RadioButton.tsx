import styles from "./RadioButton.module.scss";

interface Props {
    id: string;
    name: string;
    label: string;
    checked: boolean; 
    onChange: (id: string) => void; 
}

const RadioButton: React.FC<Props> = ({ id, name, label, checked, onChange }) => (
    <div className={styles.radioButton}>
        <input
            type="radio"
            id={id}
            name={name}
            checked={checked} 
            onChange={() => onChange(id)} 
            className={styles.radioButton__input} 
        />
        <label htmlFor={id} className={styles.radioButton__label}>
            {label}
        </label>
    </div>
);

export default RadioButton;

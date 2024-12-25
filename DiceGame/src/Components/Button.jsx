import styles from './Button.module.css';
function Button({title,icon,...rest}){
    return(
        <button {...rest} className={styles.btn}>
            {icon}
            {title}
        </button>
    )
}

export default Button;
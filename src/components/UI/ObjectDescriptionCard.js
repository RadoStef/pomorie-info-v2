import styles from './ObjectDescriptionCard.module.css';

export const ObjectDescriptionCard = ({children}) => {
    return (
        <div className={styles['card-wrapper']}>
            {children}
        </div>
    )
}
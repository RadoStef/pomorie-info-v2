import styles from './ObjectMap.module.css';

export const MapSection = ({map}) => {
    return <div className={styles['map-wrapper']}>{map}</div>
}
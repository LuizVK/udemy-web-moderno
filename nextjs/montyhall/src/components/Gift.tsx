
import styles from '../styles/Gift.module.css'

export default function Gift() {
    return (
        <div className={styles.gift}>
            <div className={styles.giftTie1}></div> 
            <div className={styles.giftTie2}></div>
            <div className={styles.giftTop}></div>
            <div className={styles.giftBody}></div>
        </div>
    )
}
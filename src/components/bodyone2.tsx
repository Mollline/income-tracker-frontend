import styles from "../styles/Home.module.css";
type incExp={
    income:number
    expense:number
}
export const BodyOne2 = ({income,expense}:incExp) => {
    return (
        <div style={{ display: 'flex', gap: '24px' }}>
            <div className={styles.bodyone2}>
                <div className={styles.bodyone21}>
                    <div><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4" cy="4" r="4" fill="#84CC16" />
                    </svg></div>
                    <div>Total income</div>
                </div>
                <div className={styles.bodyone22}>
                    <div className={styles.bodyone221}>
                        <div className={styles.bodyone2211}>{income}</div>
                        <div style={{ color: '#64748B' }}>Your income Amount</div>
                    </div>
                    <div className={styles.bodyone222}>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className={styles.bodyone2}>
                <div className={styles.bodyone21}>
                    <div><svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4" cy="4" r="4" fill="#0166FF" />
                    </svg>
                    </div>
                    <div>Total expense</div>
                </div>
                <div className={styles.bodyone22}>
                    <div className={styles.bodyone221}>
                        <div className={styles.bodyone2211}>{expense}</div>
                        <div style={{ color: '#64748B' }}>Your expense Amount</div>
                    </div>
                    <div className={styles.bodyone222}>
                    </div>
                </div>
            </div>
        </div>
    )
}
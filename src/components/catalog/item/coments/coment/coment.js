import React from 'react'
import styles from './coment.module.scss'


const Comment = ({coment}) =>{
    return(
        <div className={styles.comment}>
            <p className={styles.comment__text}>{coment.coment}</p>
            <p className={styles.comment__published}>{coment.published}</p>

        </div>
    )
}

export default Comment
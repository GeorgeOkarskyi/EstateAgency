import React from 'react'
import styles from './coments.module.scss'
import Coment from './coment/coment'


const Comments = (props) => {
    let coments = props.coments.map((coment)=>{
        return <Coment coment={coment}></Coment>
    })
    return (
        <div className={styles.coments}>
            <div className={styles.coments__output}>
                {coments}
            </div>
            <form className={styles.coments_add}>
                <input className={styles.coments_add__input} placeholder="leave a coment..." type='text'></input>
                <input className={styles.coments_add__submit} value='>' type='submit'></input>
            </form>
        </div>
    )
}

export default Comments
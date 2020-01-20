import React from 'react'
import styles from './coments.module.scss'
import Coment from './coment/coment'


const Comments = (props) => {
    let coments = props.coments.map((coment)=>{
        return <Coment coment={coment}></Coment>
    })
    let comment = React.createRef();

    let onAddComent = ()=>{
        let newComent = comment.current.value; 
        props.addComment(newComent); 
    }

    return (
        <div className={styles.coments}>
            <div className={styles.coments__output}>
                {coments}
            </div>
            <form className={styles.coments_add}>
                <input ref={comment} className={styles.coments_add__input} placeholder="leave a coment..." type='text'></input>
                <input onClick={onAddComent} className={styles.coments_add__submit} value='>' type='submit'></input>
            </form>
        </div>
    )
}

export default Comments
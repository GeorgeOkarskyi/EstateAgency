import React from 'react'
import styles from './coments.module.scss'
import Coment from './coment/coment'


const Comments = (props) => {
    let coments = props.coments.map((coment) => {
        return <Coment coment={coment}></Coment>
    })
    let comentsRevers = coments.reverse();
    
    let comment = React.createRef();
    let onAddComentKeyUp = (e)=>{
        if (e.keyCode === 13 ) {
            onAddComent()
        }
    }
    let onAddComent = (e) => { 
            let text = comment.current.value;
            let propertyId = props.id
            if (text !== '') {
                props.addComment(text, propertyId);
                props.changeInputText('');
            }
    }
    let onChangeInputText = () => {
        let text = comment.current.value;
        props.changeInputText(text);
    }

    return (
        <div className={styles.coments}>
            <div className={styles.coments__output}>
                {comentsRevers}
            </div>
            <div className={styles.coments_add}>
                <input onKeyUp={onAddComentKeyUp} onChange={onChangeInputText} value={props.inputComentText} ref={comment} className={styles.coments_add__input} placeholder="leave a coment..." type='text'></input>
                <div onClick={onAddComent} className={styles.coments_add__submit}>X</div>
            </div>
        </div>
    )
}

export default Comments
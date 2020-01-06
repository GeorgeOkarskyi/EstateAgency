import React from 'react';
import styles from '../modal.module.scss';
import {addUserActionCreator, 
    changeNameTextActionCreator, 
    changeEmailTextActionCreator,
    changePasswordTextActionCreator} 
    from '../../../../../redux/modal-reducer';

const Register = (props) => {
    let input = props.state.modal.input;

    let newNameText = React.createRef();
    let newEmailText = React.createRef();
    let newPasswordText = React.createRef();

    let onNameChange = () =>{
        let text = newNameText.current.value;
        props.dispatch(changeNameTextActionCreator(text));
    }
    let onEmailChange = () =>{
        let text = newEmailText.current.value;
        props.dispatch(changeEmailTextActionCreator(text));
    }
    let onPasswordChange = () =>{
        let text = newPasswordText.current.value;
        props.dispatch(changePasswordTextActionCreator(text));
    }

    let addUser = (e) => { 
        e.preventDefault();  
        props.dispatch(addUserActionCreator(input));
        props.dispatch(changePasswordTextActionCreator(''));
        props.dispatch(changeEmailTextActionCreator(''));
        props.dispatch(changeNameTextActionCreator(''));

    }
    return (
        <div>
            <form className={styles.form}>
                <input className={styles.form_input} 
                        onChange={onNameChange} 
                        value={input.name} 
                        ref={newNameText}
                        type="name" 
                        placeholder="Full name" 
                        name="fname" required></input><br/>
                <input className={styles.form_input} 
                        value={input.email}  
                        onChange={onEmailChange} 
                        ref={newEmailText}
                        type="email" 
                        placeholder="Email Address" 
                        name="email" required></input><br/>
                <input className={styles.form_input} 
                        value={input.password} 
                        onChange={onPasswordChange} 
                        ref={newPasswordText}
                        type="password" 
                        placeholder="Password" 
                        name="password" required></input><br/>
                <input className={styles.form_input} 
                        id='passwordConfirm' type="password" 
                        placeholder="Confirm Password" 
                        name="password" required></input><br/>
                <button className={styles.form_submit} onClick={addUser} type="submit">Signup</button>
            </form>
        </div>
    )

}

export default Register;
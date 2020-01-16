import React from 'react';
import styles from '../modal.module.scss';
 
const Register = (props) => {
    if(!props.regiastation){
        return null;
    }
    let newNameText = React.createRef();
    let newEmailText = React.createRef();
    let newPasswordText = React.createRef();
    let newPasswordConfirm = React.createRef();
    let onNameChange = () =>{
        let text = newNameText.current.value;
        props.nameChange(text);
    }
    let onEmailChange = () =>{
        let text = newEmailText.current.value;
        props.emailChange(text);
    }
    let onPasswordChange = () =>{
        let text = newPasswordText.current.value; 
        props.passwordChange(text);
    }
 
    let onPasswordCheck = () =>{
        let passwordCheck = newPasswordConfirm.current.value;
        props.passwordCheck(passwordCheck); 
    }
    let onAddUser = () => {  
        props.addUser(props.input);

    }
    return (
        <div>
            <form className={styles.form}>
                <input className={styles.form_input} 
                        onChange={onNameChange} 
                        value={props.input.name} 
                        ref={newNameText}
                        type="name" 
                        placeholder="Full name" 
                        name="fname" required></input><br/>
                <input className={styles.form_input} 
                        value={props.input.email}  
                        onChange={onEmailChange} 
                        ref={newEmailText}
                        type="email" 
                        placeholder="Email Address" 
                        name="email" required></input><br/>
                <input className={styles.form_input} 
                        value={props.input.password} 
                        onChange={onPasswordChange} 
                        ref={newPasswordText}
                        type="password" 
                        placeholder="Password" 
                          required></input><br/>
                <input className={styles.form_input} 
                        id='passwordConfirm' type="password" 
                        placeholder="Confirm Password" 
                        onChange={onPasswordCheck}
                        ref={newPasswordConfirm}
                          required></input><br/>
                <h4 className={styles.form_info}>{props.informWindow}</h4> 
                <button className={styles.form_submit} onClick={onAddUser} type="submit">Signup</button>
            </form>
        </div>
    )

}

export default Register;
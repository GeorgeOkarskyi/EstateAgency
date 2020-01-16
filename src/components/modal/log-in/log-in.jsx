import React from 'react';
import styles from '../modal.module.scss'; 

const Login = (props) => {
     
    if(!props.state.login){
        return null;
      }
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <input className={styles.form_input} type="email" placeholder="Email Address" name="email" required></input><br/>
                <input className={styles.form_input} type="password" placeholder="Password" name="password" required></input><br/>
                <div className={styles.form_container}>
                    <label>
                        <input className={styles.form_checkbox} type="checkbox" name="remember">
                        </input>Remember me
                    </label>
                    <span className={styles.form_recovery}><a href="/#">Forgot password?</a></span>
                </div>
                <button className={styles.form_submit}  type="submit">Login</button>
            </form>
        </div>
    )

}

export default Login;
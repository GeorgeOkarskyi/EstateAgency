import React from 'react';
import styles from '../modal.module.scss';

const Register = () => {
    return (
        <div>
            <form className={styles.form}>
                <input className={styles.form_input} type="name" placeholder="Full name" name="fname" required></input><br/>
                <input className={styles.form_input} type="email" placeholder="Email Address" name="email" required></input><br/>
                <input className={styles.form_input} type="password" placeholder="Password" name="password" required></input><br/>
                <input className={styles.form_input} type="password" placeholder="Confirm Password" name="password" required></input><br/>
                <button className={styles.form_submit}  type="submit">Signup</button>
            </form>
        </div>
    )

}

export default Register;
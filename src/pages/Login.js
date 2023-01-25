import { useState } from 'react';
import styles from '../styles/login.module.css'
// import { useToasts } from 'react-toast-notification';
import { login } from '../api';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [LoggingIn, setLoggingIn] = useState(false);
    // const {addToast} = useToasts();

    const handleSubmit = async (e) =>{
      e.preventDefault(); // avoid page reload
      setLoggingIn(true);
    
      if(!email || !password){
        // return addToast('Please enter both email and password', {
        //   appearance:'error',
        // })
      }

      const response = await login(email,password);
      if (response.success) {
        // addToast('Successfully logged in', {
        //   appearance: 'success',
        // });
      } else {
        // addToast(response.message, {
        //   appearance: 'error',
        // });
      }

      setLoggingIn(false);
    } 

    return (
       <form className={styles.loginForm} onSubmit={handleSubmit}>
        <span className={styles.loginSignupHeader}>Log In</span>

        <div>
          <input 
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}>

            </input>
        </div>
      
        <div className={styles.field}>
          <input 
             type="password"
             placeholder="password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}>
             </input>
        </div>

        <div className={styles.field}>
           <button disabled={LoggingIn}>
             {LoggingIn ? 'Logging in ...' : 'Log In'}
           </button>
        </div>

       </form>
      );
};
  
  export default Login;
  
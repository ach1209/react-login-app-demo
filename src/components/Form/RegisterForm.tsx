import styles from './Form.module.css'

type FormProps = {
  action: (e: React.FormEvent<HTMLFormElement>) => void
  emailValue: string;
  userValue: string;
  passwordValue: string;
  emailHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  userHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  passwordHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
}

function RegisterForm(props: FormProps) {
  return (
    <form 
      className={styles['register-form']}
      onSubmit={props.action}
    >
      <label htmlFor="email">Email:</label>
      <input 
        type="email" name="email" id="email" 
        value={props.emailValue} 
        onChange={props.emailHandler}
      />

      <label htmlFor="username">Username:</label>
      <input 
        type="text" name="username" id="username" 
        value={props.userValue}
        onChange={props.userHandler}
      />

      <label htmlFor="password">Password:</label>
      <input 
        type="password" name="password" id="password" 
        value={props.passwordValue}
        onChange={props.passwordHandler}
      />
      
      {props.children}
    </form>
  )
}

export default RegisterForm
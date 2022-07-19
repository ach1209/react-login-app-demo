import styles from './Form.module.css'

type FormProps = {
  action: (e: React.FormEvent<HTMLFormElement>) => void;
  requireUserName: boolean;
  values: {
    email: string;
    userName?: string;
    password: string;
  }
  changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  children: React.ReactNode;
}

function AccountForm(props: FormProps) {
  const isUserRequired = props.requireUserName

  return (
    <form 
      className={styles['account-form']}
      onSubmit={props.action}
    >
      <label htmlFor="email">Email:</label>
      <input 
        type="email" name="email" id="email" 
        value={props.values.email} 
        onChange={props.changeHandler}
      />

      { isUserRequired && 
        <>
          <label htmlFor="username">Username:</label>
          <input 
            type="text" name="userName" id="username" 
            value={props.values.userName}
            onChange={props.changeHandler}
          />     
        </>
      }

      <label htmlFor="password">Password:</label>
      <input 
        type="password" name="password" id="password" 
        value={props.values.password}
        onChange={props.changeHandler}
      />
      
      {props.children}
    </form>
  )
}

export default AccountForm
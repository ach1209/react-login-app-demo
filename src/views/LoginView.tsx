import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import AccountForm from "../components/Form/AccountForm"
import Button from "../components/Button/Button"
import StatusMessage from "../components/StatusMessage/StatusMessage"

function LoginView() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const [message, setMessage] = useState('')
  const [loginError, setLoginError] = useState(false)
  const auth = getAuth()
  const navigate = useNavigate()

  function signIntoAccount(e: React.SyntheticEvent) {
    e.preventDefault()
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(() => {
        auth.onAuthStateChanged(user => user && navigate('/profile', { replace: true }))
      })
      .catch(err => {
        setLoginError(true)
        switch(err.code) {
          case 'auth/invalid-email':
            setMessage('Please enter a valid email address')
            break;
          case 'auth/wrong-password':
            setMessage('The password you entered was incorrect')
            break;
          default:
            setMessage('The required fields cannot be left blank')
            break; 
        }
      })
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  return (
    <>
      <h1 className="text-center">Login to Your Account</h1>
      { loginError && <StatusMessage message={message} status="rejected" />}
      <AccountForm
        action={signIntoAccount}
        values={values}
        changeHandler={handleInputChange}
        requireUserName={false}
      >
        <Button>Submit</Button>
      </AccountForm>
    </>
  )
}

export default LoginView
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import AccountForm from "../components/Form/AccountForm"
import Button from "../components/Button/Button"

function LoginView() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const auth = getAuth()
  const navigate = useNavigate()

  function signIntoAccount(e: React.SyntheticEvent) {
    e.preventDefault()
    signInWithEmailAndPassword(auth, values.email, values.password)

    auth.onAuthStateChanged(user => {
      if (user) {
        navigate('/profile', { replace: true })
      } else {
        console.log('nope')
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
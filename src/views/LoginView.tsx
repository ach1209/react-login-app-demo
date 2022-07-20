import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import useHandleErrorCodes from "../hooks/useHandleErrorCodes"
import AccountForm from "../components/Form/AccountForm"
import Button from "../components/Button/Button"
import StatusMessage from "../components/StatusMessage/StatusMessage"

function LoginView() {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const [errorCode, setErrorCode] = useState('')
  const [showError, setShowError] = useState(false)
  const { message, status } = useHandleErrorCodes(errorCode)
  const auth = getAuth()
  const navigate = useNavigate()

  function signIntoAccount(e: React.SyntheticEvent) {
    e.preventDefault()
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(() => {
        auth.onAuthStateChanged(user => user && navigate('/profile', { replace: true }))
      })
      .catch(err => {
        setShowError(true)
        setErrorCode(err.code)
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
      { showError && <StatusMessage message={message} status={status} />}
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
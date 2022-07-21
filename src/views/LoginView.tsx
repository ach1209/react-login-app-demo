import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import useHandleErrorCodes from '../hooks/useHandleErrorCodes'
import AccountStatusContext from '../context/AccountStatusContext'
import AccountForm from '../components/Form/AccountForm'
import Button from '../components/Button/Button'
import StatusMessage from '../components/StatusMessage/StatusMessage'

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
  const { setIsLoggedIn, setUserName } = useContext(AccountStatusContext)

  function signIntoAccount(e: React.SyntheticEvent) {
    e.preventDefault()
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then(() => {
        auth.onAuthStateChanged(user => {
          setIsLoggedIn?.(true)
          /**
           * displayName cannot be null.
           * When user creates an account, the profile is updated with the username in the registration form.
           * The username field is required.
           */
          setUserName?.(user?.displayName!)
          user && navigate('/', { replace: true })
        })
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
import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import StatusMessage from '../components/StatusMessage/StatusMessage'
import RegisterForm from "../components/Form/RegisterForm"
import Button from "../components/Button/Button"

function RegisterView() {
  const [email, setEmail] = useState('')
  // const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [isCreated, setIsCreated] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const [status, setStatus] = useState('')
  const auth = getAuth()

  function createAccount(e: React.SyntheticEvent) {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => handleStatusDetails('Your account has been created successfully', 'approved'))
      .catch(err => {
        switch (err.code) {
          case 'auth/email-already-in-use':
            handleStatusDetails('The email is already in use', 'rejected')
            break;
          case 'auth/invalid-email':
            handleStatusDetails('The email you entered is invalid', 'rejected')
            break;
          case 'auth/weak-password':
            handleStatusDetails('Your password strength is weak', 'rejected')
            break;
          default:
            handleStatusDetails('Something went wrong with creating your account', 'rejected')
            break;
        }
      })
    setTimeout(() => setIsCreated(false), 6000)
    resetFields()
  }

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value)
  }

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value)
  }

  function resetFields() {
    setEmail('')
    setPassword('')
  }

  function handleStatusDetails(msg: string, status: 'approved' | 'rejected') {
    setStatusMessage(msg)
    setStatus(status)
    setIsCreated(true)
  }

  return (
    <>
      <h1 className="text-center">Create Your Account</h1>
      { isCreated && <StatusMessage message={statusMessage} status={status} /> }
      <RegisterForm
        action={createAccount}
        emailValue={email}
        passwordValue={password}
        emailHandler={handleEmailChange}
        passwordHandler={handlePasswordChange}
      >
        <Button>Submit</Button>
      </RegisterForm>
    </>
  )
}

export default RegisterView
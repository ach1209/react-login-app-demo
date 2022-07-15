import { useState } from 'react'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import RegisterForm from "../components/Form/RegisterForm"
import Button from "../components/Button/Button"

function RegisterView() {
  const [email, setEmail] = useState('')
  // const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const auth = getAuth()

  function createAccount(e: React.SyntheticEvent) {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log('account created successfully')
      })
      .catch(err => {
        switch (err.code) {
          case 'auth/email-already-in-use':
            console.log(err.message)
            break;
          case 'auth/invalid-email':
            console.log(err.message)
            break;
          case 'auth/weak-password':
            console.log(err.message)
            break;
          default:
            console.log(err.message)
            break;
        }
      })
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

  return (
    <>
      <h1 className="text-center">Create Your Account</h1>
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
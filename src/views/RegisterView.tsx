import { useState } from 'react'
import { getAuth, updateProfile, createUserWithEmailAndPassword } from 'firebase/auth'
import StatusMessage from '../components/StatusMessage/StatusMessage'
import AccountForm from "../components/Form/AccountForm"
import Button from "../components/Button/Button"

function RegisterView() {
  const [values, setValues] = useState({
    email: '',
    userName: '',
    password: ''
  })
  const [isCreated, setIsCreated] = useState(false)
  const [statusMessage, setStatusMessage] = useState('')
  const [status, setStatus] = useState('')
  const auth = getAuth()

  function createAccount(e: React.SyntheticEvent) {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, values.email, values.password)
      /**
       * userCredential returns an object from firebase
       */
      .then(userCredential => {
        handleStatusDetails('Your account has been created successfully', 'approved')
        /**
         * Add username to credentials
         */
        updateProfile(userCredential.user, { displayName: values.userName })
      })
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

    /**
     * Hide the status message after 6 seconds
     */
    setTimeout(() => setIsCreated(false), 6000)
    resetFields()
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  function resetFields() {
    setValues({
      email: '',
      userName: '',
      password: ''
    })
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
      <AccountForm
        action={createAccount}
        values={values}
        changeHandler={handleInputChange}
        requireUserName={true}
      >
        <Button>Submit</Button>
      </AccountForm>
    </>
  )
}

export default RegisterView
import { useState } from 'react'
import { getAuth, updateProfile, createUserWithEmailAndPassword } from 'firebase/auth'
import useHandleErrorCodes from '../hooks/useHandleErrorCodes'
import StatusMessage from '../components/StatusMessage/StatusMessage'
import AccountForm from "../components/Form/AccountForm"
import Button from "../components/Button/Button"

function RegisterView() {
  const [values, setValues] = useState({
    email: '',
    userName: '',
    password: ''
  })
  const [showMsg, setShowMsg] = useState(false)
  const [errorCode, setErrorCode] = useState('')
  const { message, status } = useHandleErrorCodes(errorCode)
  const auth = getAuth()

  function createAccount(e: React.SyntheticEvent) {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, values.email, values.password)
      /**
       * userCredential returns an object from firebase
       */
      .then(userCredential => {
        setShowMsg(true)
        /**
         * Add username to credentials
         */
        updateProfile(userCredential.user, { displayName: values.userName })
      })
      .catch(err => {
        setShowMsg(true)
        setErrorCode(err.code)
      })

    /**
     * Hide the status message after 6 seconds
     */
    setTimeout(() => setShowMsg(false), 6000)
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

  return (
    <>
      <h1 className="text-center">Create Your Account</h1>
      { showMsg && <StatusMessage message={message} status={status} /> }
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
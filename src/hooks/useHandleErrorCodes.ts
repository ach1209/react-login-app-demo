function useHandleErrorCodes(code?: string) {
  if (code) {
    switch(code) {
      case 'auth/email-already-in-use':
        return { message: 'The email is already registered', status: 'rejected' }
      case 'auth/weak-password':
        return { message: 'Your password strength is weak', status: 'rejected' }
      case 'auth/invalid-email':
        return { message: 'Please enter a valid email address', status: 'rejected' }
      case 'auth/wrong-password':
        return { message: 'The password you entered was incorrect', status: 'rejected' }
      default:
        return { message: 'The required fields cannot be left blank', status: 'rejected' }
    }    
  }
  return { message: 'Your account has been created successfully', status: 'approved' }
}

export default useHandleErrorCodes
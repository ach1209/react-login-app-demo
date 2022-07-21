import { createContext } from 'react'

interface AccountContextType {
  isLoggedIn: boolean;
  setIsLoggedIn?: (value: boolean) => void;
  userName: string;
  setUserName?: (value: string) => void;
}

const AccountStatusContext = createContext({} as AccountContextType)

export default AccountStatusContext
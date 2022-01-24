import React, { useState, useEffect } from 'react'

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: () => {}
})

export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn')

    if (storedUserLoggedInInformation) {
      setIsLoggedIn(true)
    }
  }, [])

  const loginHandler = (email, password) => {
    setIsLoggedIn(true)
    localStorage.setItem('isLoggedIn', '1')
  }

  const logoutHandler = () => {
    setIsLoggedIn(false)
    localStorage.removeItem('isLoggedIn')
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext

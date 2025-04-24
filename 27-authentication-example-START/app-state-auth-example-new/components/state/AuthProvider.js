import {useState, useContext, createContext} from 'react'
// this is going to keep the state of all of the tokens once you login.

import { login } from '@/utils/api/auth'


// 2. let's create a context
export const AuthContext = createContext({})

// 6. create  our own custom hook
export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error(`useAuth must be used within a AuthProvider`)
  }
  return context
}

// 1. let's create our component
export default function AuthProvider({children}) {
  // 4. create some some state that we're going to pass in so that other
  // components can use them.
  const [token, setToken] = useState()
  const [user, setUser] = useState()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // 5. create a sign in system that will login into the backend
  //    and also create some state so that you can see it.
  const signIn = async ({email, password}) => {
    // login into the backend
    const data = await login({email: email, password: password})

    // set the frontend data in memory
    setToken(data.accessToken)
    setUser(data.user)
    setIsAuthenticated(true)
  }


  // 3. let's create a provider
  return <AuthContext.Provider value={{
    // some values used by child component will be as follows
    token, user, isAuthenticated,
    // make the following functions available as well.
    signIn
  }}>

    {children}
  </AuthContext.Provider>
}
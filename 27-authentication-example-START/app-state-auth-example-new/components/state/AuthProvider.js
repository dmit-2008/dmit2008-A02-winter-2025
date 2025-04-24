import {useState, useContext, createContext} from 'react'
// this is going to keep the state of all of the tokens once you login.

// 2. let's create a context
export const AuthContext = createContext({})




// 1. let's create our component
export default function AuthProvider({children}) {
  // 4. create some some state that we're going to pass in so that other
  // components can use them.
  const [token, setToken] = useState()
  const [user, setUser] = useState()
  const [isAuthenticated, setIsAuthenticated] = useState(false)




  // 3. let's create a provider
  return <AuthContext.Provider value={{
    // some values used by child component will be as follows
    token, user, isAuthenticated
  }}>

    {children}
  </AuthContext.Provider>
}
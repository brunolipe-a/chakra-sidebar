import { useState } from 'react'
import { useEffect } from 'react'
import { useContext, createContext, ReactNode } from 'react'
import { api } from '../services/api'
import { UserData } from '../type/auth'

interface AuthProps {
  children: ReactNode
}

type AuthContextData = {
  isAuthenticated: boolean
  isAuthLoading: boolean
  signIn(props: SignInProps): Promise<boolean>
}

type SignInProps = {
  email: string
  password: string
}

const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isAuthLoading, setIsAuthLoading] = useState(true)

  useEffect(() => {
    const userData = JSON.parse(
      localStorage.getItem('@dashgo:user')
    ) as UserData | null

    if (userData?.token) {
      api.defaults.headers.authorization = `Bearer ${userData.token}`

      setIsAuthenticated(true)
    }

    setIsAuthLoading(false)
  }, [])

  async function signIn(credentials: SignInProps) {
    try {
      const { data } = await api.post<UserData>('login', {
        ...credentials,
        device_name: 'Chrome',
      })

      api.defaults.headers.authorization = `Bearer ${data.token}`

      localStorage.setItem('@dashgo:user', JSON.stringify(data))

      setIsAuthenticated(true)

      return true
    } catch {
      return false
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthLoading,
        isAuthenticated,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

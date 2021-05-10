import { useState } from 'react'
import { useEffect } from 'react'
import { useContext, createContext, ReactNode } from 'react'

import Router from 'next/router'

import { api } from '../services/api'
import { UserData } from '../types/auth'
import { useLayout } from './LayoutContext'
import { useToast } from '@chakra-ui/react'
import { Response, User } from '../types'

interface AuthProps {
  children: ReactNode
}

type AuthContextData = {
  isAuthenticated: boolean
  isAuthLoading: boolean
  user: User
  signIn(props: SignInProps): Promise<boolean>
  signOut(): Promise<void>
}

type SignInProps = {
  email: string
  password: string
}

const TOKEN_KEY = '@cashgo:token'

const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProps) {
  const toast = useToast()
  const { loginUrl } = useLayout()

  const [user, setUser] = useState({} as User)

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isAuthLoading, setIsAuthLoading] = useState(true)

  useEffect(() => {
    const token: string = JSON.parse(localStorage.getItem(TOKEN_KEY))

    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`

      setIsAuthenticated(true)
    }

    setTimeout(() => {
      setIsAuthLoading(false)
    }, 500)
  }, [])

  useEffect(() => {
    if (isAuthenticated && !user.id) {
      api.get<Response<User>>('me').then(({ data }) => {
        setUser(data.data)
      })
    }
  }, [isAuthenticated, user])

  async function signIn(credentials: SignInProps) {
    try {
      const { data } = await api.post<UserData>('login', {
        ...credentials,
        device_name: 'Chrome',
      })

      api.defaults.headers.authorization = `Bearer ${data.token}`

      localStorage.setItem(TOKEN_KEY, JSON.stringify(data.token))

      setIsAuthenticated(true)

      return true
    } catch {
      return false
    }
  }

  async function signOut() {
    setIsAuthenticated(false)
    setUser({} as User)
    Router.push(loginUrl)

    await api.delete('logout')

    localStorage.removeItem(TOKEN_KEY)

    toast({
      title: 'Deslogado',
      description: 'Você foi deslogado com sucesso.',
      status: 'success',
      position: 'top-right',
      duration: 2000,
      isClosable: true,
    })
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthLoading,
        isAuthenticated,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

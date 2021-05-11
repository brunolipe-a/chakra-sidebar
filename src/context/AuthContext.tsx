import {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
  useCallback
} from 'react'

import { useToast } from '@chakra-ui/react'

import { setCookie, parseCookies } from 'nookies'

import { api, centralAPI } from '~/services/api'
import { Tenant, User } from '~/types'
import { UserData } from '~/types/auth'
import { logoutHandler, TOKEN_KEY, setInterceptor } from '~/utils/auth'

import { useAbility } from './AbilityContext'
import { useLayout } from './LayoutContext'

interface AuthProps {
  children: ReactNode
}

type AuthContextData = {
  isAuthenticated: boolean
  isAuthLoading: boolean
  user: User
  signIn: (_props: SignInProps) => Promise<boolean>
  signOut(): Promise<void>
}

type SignInProps = {
  email: string
  password: string
}

const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProps) {
  const toast = useToast()
  const { loginUrl } = useLayout()
  const ability = useAbility()

  const [user, setUser] = useState({
    tenants: []
  } as User)

  const [tenant, setTenant] = useState<Tenant>()

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isAuthLoading, setIsAuthLoading] = useState(true)

  const getUserData = useCallback(() => {
    centralAPI
      .get<User>('me')
      .then(({ data }) => {
        setUser(data)
        ability.update(data.permissions)
        setTenant(data.tenants[0])
      })
      .catch(err => console.error(err))
  }, [ability])

  async function signIn(credentials: SignInProps) {
    try {
      const { data } = await centralAPI.post<UserData>('login', {
        ...credentials,
        device_name: 'Chrome'
      })

      centralAPI.defaults.headers.authorization = `Bearer ${data.token}`
      api.defaults.headers.authorization = `Bearer ${data.token}`

      setCookie(undefined, TOKEN_KEY, data.token, {
        maxAge: 60 * 60 * 24, // 1 day,
        path: '/'
      })

      getUserData()

      setIsAuthenticated(true)

      return true
    } catch {
      return false
    }
  }

  async function signOut() {
    setIsAuthenticated(false)

    setUser({} as User)

    await logoutHandler(loginUrl)

    toast({
      title: 'Deslogado',
      description: 'Você foi deslogado com sucesso.',
      status: 'success',
      position: 'top-right',
      duration: 2000,
      isClosable: true
    })
  }

  useEffect(() => {
    setInterceptor({ api, setAuthenticated: setIsAuthenticated })
    setInterceptor({ api: centralAPI, setAuthenticated: setIsAuthenticated })

    async function initiateAuth() {
      const token = parseCookies()[TOKEN_KEY]

      if (token) {
        centralAPI.defaults.headers.authorization = `Bearer ${token}`
        api.defaults.headers.authorization = `Bearer ${token}`

        setIsAuthenticated(true)
        getUserData()
      }

      setTimeout(() => {
        setIsAuthLoading(false)
      }, 500)
    }

    initiateAuth()
  }, [getUserData])

  useEffect(() => {
    if (tenant) {
      api.defaults.baseURL = `${centralAPI.defaults.baseURL}/${tenant.id}`
    }
  }, [tenant])

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthLoading,
        isAuthenticated,
        signIn,
        signOut
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)

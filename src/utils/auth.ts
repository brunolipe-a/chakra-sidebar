import { createStandaloneToast } from '@chakra-ui/react'

import { NextPageContext } from 'next'
import Router from 'next/router'

import { AxiosError, AxiosInstance } from 'axios'
import { destroyCookie } from 'nookies'

import { centralAPI } from '~/services/api'
import theme from '~/styles/theme'

export const TOKEN_KEY = '@cashgo:token'

export async function logoutHandler(
  redirectURL: string,
  ctx: NextPageContext = undefined
) {
  if (!ctx) {
    Router.push(redirectURL)
  }

  destroyCookie(ctx, TOKEN_KEY)

  await centralAPI.delete('logout')
}

const toast = createStandaloneToast({ theme })

type SetInterceptorProps = {
  api: AxiosInstance
  setAuthenticated(_bool: boolean): void
}

export function setInterceptor({ api, setAuthenticated }: SetInterceptorProps) {
  api.interceptors.response.use(
    res => res,
    (err: AxiosError) => {
      let description: string

      if (err.response.status === 401) {
        description = 'Token expirado. Entre novamente.'
        setAuthenticated(false)
        logoutHandler('/login')
      } else {
        description =
          err.response?.data.message || err.response?.data.error || err.message
      }

      toast({
        title: 'Houve um erro!',
        description,
        status: 'error',
        position: 'top-right',
        duration: 2500
      })

      return Promise.reject(err)
    }
  )
}

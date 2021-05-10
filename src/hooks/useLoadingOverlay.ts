import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext'

type HookProps = {
  isGuest?: boolean
  redirecURL: string
}

export function useLoadingOverlay({ isGuest, redirecURL }: HookProps) {
  const { push } = useRouter()
  const { isAuthLoading, isAuthenticated } = useAuth()

  const [shouldShowLoading, setShouldShowLoading] = useState(isAuthLoading)

  useEffect(() => {
    if (!isAuthLoading) {
      if (isGuest ? isAuthenticated : !isAuthenticated) {
        push(redirecURL)
      } else {
        setShouldShowLoading(false)
      }
    }
  }, [isAuthLoading, isAuthenticated, isGuest, redirecURL, push])

  return shouldShowLoading
}

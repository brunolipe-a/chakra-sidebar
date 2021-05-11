import { useState, useContext, createContext, ReactNode } from 'react'

import { LayoutConfig } from '~/types/layout'

interface LayoutProps {
  children: ReactNode
  config: LayoutConfig
}

type LayoutContextData = LayoutConfig

const LayoutContext = createContext({} as LayoutContextData)

export function LayoutProvider({ children, config }: LayoutProps) {
  const [layout] = useState(config)

  return (
    <LayoutContext.Provider value={layout}>{children}</LayoutContext.Provider>
  )
}

export const useLayout = () => useContext(LayoutContext)

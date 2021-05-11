import { createContext } from 'react'

import { Ability } from '@casl/ability'
import { createContextualCan, useAbility as useCaslAbility } from '@casl/react'

import { Abilities } from '~/types/ability'

const ability = new Ability<Abilities>()

const AbilityContext = createContext(ability)

export function AbilityProvider({ children }) {
  return (
    <AbilityContext.Provider value={ability}>
      {children}
    </AbilityContext.Provider>
  )
}

export const useAbility = () => useCaslAbility(AbilityContext)

export const Can = createContextualCan(AbilityContext.Consumer)

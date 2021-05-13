import { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { FilterValue, useAsyncDebounce } from 'react-table'

import { Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

type SearchInputProps = {
  initialValue: string
  setGlobalFilter: (_filterValue: FilterValue) => void
}

export function SearchInput({
  initialValue,
  setGlobalFilter
}: SearchInputProps) {
  const [value, setValue] = useState(initialValue)

  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 400)

  return (
    <InputGroup maxW="md" size="sm">
      <InputLeftElement pointerEvents="none">
        <Icon as={FiSearch} color="gray.300" />
      </InputLeftElement>
      <Input
        placeholder="Pesquisar por..."
        value={value || ''}
        borderRadius="base"
        onChange={({ target: { value } }) => {
          setValue(value)
          onChange(value)
        }}
      />
    </InputGroup>
  )
}

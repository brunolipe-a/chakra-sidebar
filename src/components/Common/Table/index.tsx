/* eslint-disable react/jsx-key */
/* eslint-disable @typescript-eslint/ban-types */
import { SetStateAction, useCallback, Dispatch, useEffect } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import {
  useTable,
  useSortBy,
  usePagination,
  useGlobalFilter,
  Row,
  IdType,
  ColumnInterface,
  Column
} from 'react-table'

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  Icon,
  Box,
  Flex,
  HStack,
  ButtonGroup,
  useColorModeValue
} from '@chakra-ui/react'

import { matchSorter } from 'match-sorter'

import { LoadingTBodyContent } from './LoadingTBodyContent'
import { PaginationButton } from './PaginationButton'
import { SearchInput } from './SearchInput'
import { SelectPageSize } from './SelectPageSize'
import { TableCount } from './TableCount'

interface DataTableProps {
  columns: ColumnInterface[]
  data: object[]
  columnsToFilter: string[] | 'all'
  isLoading?: boolean
  total?: number
  pageCount: number
  pageIndexState: [number, Dispatch<SetStateAction<number>>]
}

export function DataTable({
  columns,
  columnsToFilter,
  data,
  isLoading,
  total = data.length,
  pageIndexState: [controlledPageIndex, setPageIndex],
  pageCount: controlledPageCount
}: DataTableProps) {
  const ourGlobalFilterFunction = useCallback(
    (rows: Row[], ids: IdType<object>[], query: string) => {
      const columns = columnsToFilter === 'all' ? ids : columnsToFilter
      return matchSorter(rows, query, {
        keys: columns.map(columnName => `values.${columnName}`)
      })
    },
    [columnsToFilter]
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    nextPage,
    setPageSize,
    previousPage,
    setGlobalFilter,
    state: { pageIndex, pageSize, globalFilter }
  } = useTable(
    {
      columns: columns as Column[],
      data,
      globalFilter: ourGlobalFilterFunction,
      manualPagination: true,
      pageCount: controlledPageCount,
      initialState: { pageSize: 15, pageIndex: controlledPageIndex }
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  )

  useEffect(() => {
    setPageIndex(pageIndex)
  }, [pageIndex, setPageIndex])

  return (
    <Box>
      <HStack>
        <SearchInput
          initialValue={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
      </HStack>
      <Box overflowX="auto" borderWidth="1px" borderRadius="base" my={4}>
        <Table
          {...getTableProps()}
          borderColor={useColorModeValue('gray.200', 'whiteAlpha.300')}
          minW="2xl"
          // variant="striped"
        >
          <Thead bg={useColorModeValue('gray.50', 'transparent')}>
            {headerGroups.map(headerGroup => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <Th
                    borderColor="inherit"
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    isNumeric={column.isNumeric}
                    userSelect="none"
                  >
                    {column.render('Header')}
                    <chakra.span pl="4">
                      {column.isSorted && !column.isSortedDesc && (
                        <Icon as={FiChevronUp} aria-label="sorted ascending" />
                      )}
                      {column.isSortedDesc && (
                        <Icon
                          as={FiChevronDown}
                          aria-label="sorted descending"
                        />
                      )}
                    </chakra.span>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {page.map(row => {
              prepareRow(row)
              return (
                <Tr {...row.getRowProps()}>
                  {row.cells.map(cell => (
                    <Td
                      borderColor="inherit"
                      {...cell.getCellProps()}
                      isNumeric={cell.column.isNumeric}
                      borderBottom={row.index === page.length - 1 ? '0' : '1px'}
                    >
                      {cell.render('Cell')}
                    </Td>
                  ))}
                </Tr>
              )
            })}
            {page.length === 0 && isLoading && (
              <LoadingTBodyContent
                numOfColumns={columns.length}
                numOfRows={pageSize}
              />
            )}
            {page.length === 0 && !isLoading && (
              <Tr>
                <Td colSpan={columns.length} textAlign="center">
                  Sem dados...
                </Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </Box>

      <Flex justify="space-between" align="center" px={1}>
        <SelectPageSize
          setPageSize={setPageSize}
          actualPageSize={pageSize}
          pageSizes={[10, 20, 30, 40]}
        />
        <TableCount
          length={total}
          pageCount={pageCount}
          pageIndex={pageIndex}
          pageSize={pageSize}
        />
        <ButtonGroup variant="outline" size="sm">
          <PaginationButton onClick={previousPage} disabled={!canPreviousPage}>
            Anterior
          </PaginationButton>
          <PaginationButton onClick={nextPage} disabled={!canNextPage}>
            Próximo
          </PaginationButton>
        </ButtonGroup>
      </Flex>
    </Box>
  )
}

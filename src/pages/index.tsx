import { useMemo, useState } from 'react'
import { ColumnInterface } from 'react-table'

import { Box } from '@chakra-ui/react'

import { DataTable } from '~/components/Common/Table'

import { useAxios } from '~/hooks/useAxios'

type Repo = {
  name: string
  node_id: string
  owner: {
    login: string
    avatar_url: string
  }
  language: string
}
export default function Home() {
  const [pageIndex, setPageIndex] = useState<number>(0)

  const { data, isLoading } = useAxios<Repo[]>(
    `users/brunolipe-a/repos?page=${pageIndex + 1}&per_page=15`
  )

  const columns = useMemo<ColumnInterface<Repo>[]>(
    () => [
      {
        Header: 'name',
        accessor: 'name'
      },
      {
        Header: 'language',
        accessor: 'language',
        isNumeric: true
      },
      {
        Header: 'id',
        accessor: 'node_id'
      },

      {
        Header: 'login',
        accessor: 'owner.login'
      }
    ],
    []
  )

  return (
    <Box p={4}>
      <DataTable
        columns={columns}
        data={data ?? []}
        columnsToFilter="all"
        isLoading={isLoading}
        pageIndexState={[pageIndex, setPageIndex]}
        pageCount={5}
        total={66}
      />
    </Box>
  )
}

// Home.Layout = MainLayout
// Home.pageTitle = 'Home'

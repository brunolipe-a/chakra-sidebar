import useSWR, { SWRConfiguration } from 'swr'

import { api } from '~/services/api'

function useAxios<D = any, Err = any>(
  url: string,
  options?: SWRConfiguration<D, Err>
) {
  const fetcher = (url: string) => api.get<D>(url).then(res => res.data)

  const swr = useSWR<D, Err>(url, fetcher, {
    errorRetryCount: 1,
    shouldRetryOnError: false,
    ...options
  })

  return { ...swr, isLoading: !swr.data && !swr.error }
}

export { useAxios }

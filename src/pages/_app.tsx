import { FC } from 'react'

import { AppProps } from 'next/app'

import { AppProvider } from '../context'

const Noop: FC = ({ children }) => <>{children}</>

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop
  const pageTitle = (Component as any).pageTitle

  return (
    <AppProvider>
      <Layout pageTitle={pageTitle}>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  )
}

export default MyApp

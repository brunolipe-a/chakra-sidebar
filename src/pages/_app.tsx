import { FC } from 'react'

import { AppProps } from 'next/app'

import NextNprogress from 'nextjs-progressbar'

import { AppProvider } from '../context'
import theme from '../styles/theme'

const Noop: FC = ({ children }) => <>{children}</>

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop
  const pageTitle = (Component as any).pageTitle

  return (
    <AppProvider>
      <NextNprogress
        color={theme.colors.teal[500]}
        height={2}
        options={{ showSpinner: false }}
      />
      <Layout pageTitle={pageTitle}>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  )
}

export default MyApp

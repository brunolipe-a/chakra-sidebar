import { FC } from 'react'

import { AppProps } from 'next/app'
import Head from 'next/head'
import NextNprogress from 'nextjs-progressbar'

import layout from '~/config/layout'
import { AppProvider } from '~/context'
import theme from '~/styles/theme'

const Noop: FC = ({ children }) => <>{children}</>

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop
  const pageTitle = (Component as any).pageTitle

  return (
    <AppProvider>
      <NextNprogress
        color={theme.colors.teal[500]}
        height={3}
        options={{ showSpinner: false }}
      />
      <Head>
        <title>{layout.title}</title>
      </Head>
      <Layout pageTitle={pageTitle}>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  )
}

export default MyApp

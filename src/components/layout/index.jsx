import Head from 'next/head'
import FooterComponent from '../footer'
import HeaderComponent from '../header'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Events App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </>
  )
}

export default Layout

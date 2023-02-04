import React from "react"
import Head from 'next/head'
import { AppProps } from "next/app"
import { AuthProvider } from "../context/AuthContext";
import GlobalStyle from '../styles/global';
import ApplicationLayout from "../components/ApplicationLayout";


const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Project Portfolio</title>
      </Head>
      <AuthProvider>
        <ApplicationLayout>
          <Component {...pageProps} />
          <GlobalStyle />
        </ApplicationLayout>
      </AuthProvider>
    </>
  )
}

export default MyApp

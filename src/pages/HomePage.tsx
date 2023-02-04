import { GetServerSideProps } from 'next';
import React from 'react';
import { parseCookies } from 'nookies'
import { getAPIClient } from '../services/axios';

const HomePage: React.FC = () => {

  return (
    <h1>HomePage </h1>
  )
}

export default HomePage

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  //Validar Autenticação de acesso à pagina via server-side do next
  const apiClient = getAPIClient(ctx);

  const { ['projectPortfolio.token']: token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  apiClient.get('/users')

  return {
    props: {}
  }
}

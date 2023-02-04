import React from 'react';
import { GetServerSideProps } from 'next';
import { parseCookies } from 'nookies'
import { getAPIClient } from '../services/axios';
import LogoHome from '../assets/medical-fake-v2-w-300px.svg'
import { HomeContainer } from '../styles/layout/styles';

const Home: React.FC = () => {
  return (
    <HomeContainer>
      <LogoHome style={{marginBottom: "40px"}} />
      <p>Esta é a <strong>CLINICAL FAKE</strong>, uma clínica médica fictícia criada como meu projeto de portfólio.</p>
      <p>Navegando neste sistema você vai encontrar várias funcionalidades, requisições de API's e
      componentes criados a partir dos meus conhecimentos técnicos.</p>
      <p>As tecnologias utilizadas para este projeto são:</p>
        <p><b>NextJs, Typescript, Styled-components, Ant-Design, Rest API, NodeJs, Express, MySQL.</b> </p>
    </HomeContainer>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  //Validar Autenticação de acesso à pagina via server-side do next
  const apiClient = getAPIClient(ctx);

  const { ['projectPortfolio.token']: token } = parseCookies(ctx)

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  apiClient.get('/')

  return {
    props: {}
  }
}

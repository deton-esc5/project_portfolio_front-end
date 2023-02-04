import { parseCookies } from 'nookies'
import styled from 'styled-components'

const { ['projectPortfolio.token']: token } = parseCookies()

export const GlobalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #FFFF;
  margin-top: 10px;
  padding: 10px;
  width: 1030px;
`
export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-self: flex-end;
  background-color: #FFFF;
  padding-left: 20px;
  padding-right: 10px;
  .ant-btn-link {
    padding-bottom: 0px;
    color: #2E78BD;
  }
  .ant-btn-link:hover {
    color: #BD3F40;
  }
  .ant-btn-primary {
    padding-bottom: 0px;
    background-color: #2E78BD;
    border: none;
  }
  .ant-btn-primary:hover {
    background-color: #BD3F40;
    border: none;
  }
`
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #FFFF;
  margin-top: 10px;
  padding: 10px;
  width: 1030px;
  min-height: ${token ? 'calc(100vh - 236px)' :'calc(100vh - 160px)' }
`

export const FooterContainer = styled.div`
  background-color: #FFFF;
  margin-top: 10px;
  padding: 10px;
  width: 1030px;
  h5 {
    font-weight: 600;
    color: #2E78BD;
  }
`

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FFFF;
  margin-top: 10px;
  padding: 10px;

  h5 {
    font-weight: 600;
    color: #2E78BD;
  }
`

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #FFFF;

  p {
    padding: 0 150px;
    color: #2E78BD;
    padding-bottom: 10px;
  }


  strong {
    color: #BD3F40;
    font-weight: 700;
  }

  b {
    color: #BD3F40;
    font-weight: 500;
  }
`

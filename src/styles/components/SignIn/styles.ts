import styled from 'styled-components'

export const ContainerLogin = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #FFFF;
  padding-left: 20px;
  padding-right: 10px;

  h1 {
    color: #2E78BD;
    font-size: 40px;
    font-weight: 600;
  }

  h5 {
    color: #BD3F40;
    font-size: 13px;
    padding-bottom: 10px;
    font-weight: 550;
  }

  p {
    padding: 0 200px;
    color: #2E78BD;
    text-align:center;
    font-size: 13px;
    padding-bottom: 10px;
  }


  b {
    color: #BD3F40;
    font-weight: 700;
  }
`

export const ContentLogin = styled.div`

  border: 1px #2E78BD solid;
  text-align: center;
  border-radius: 8px;
  padding: 20px;
  height: 380px;

  .ant-btn-link {
    color: #2E78BD;
  }
  .ant-btn-link:hover {
    color: #BD3F40;
  }

  .ant-btn-primary {
    background-color: #2E78BD;
    border: none;
  }
  .ant-btn-primary:hover {
    background-color: #BD3F40;
    border: none;
  }

  .ant-input {
    border: 1px #2E78BD solid;
    border-radius: 4px;
  }

  .ant-form label {
    color: #2E78BD
  }

  .ant-input-affix-wrapper {
    border: 1px #2E78BD solid;
    border-radius: 4px;
  }
`

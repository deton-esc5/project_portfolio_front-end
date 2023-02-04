import React, { FC, useState } from 'react';
import { Modal, Input, Divider } from 'antd';

type DataRegistratioType = {
  name: string;
  login: string;
  password: string;

}

type Props = {
  openModal: boolean;
  setOpenModal: (active: boolean) => void;
}


const UserRegistrationModal: React.FC<Props> = ({ openModal, setOpenModal }) => {

  const [dataRegistration, setDataRegistration] = useState<DataRegistratioType>()

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataRegistration({...dataRegistration, name: e.target.value})
  }

  const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataRegistration({...dataRegistration, login: e.target.value})
  }

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataRegistration({...dataRegistration, password: e.target.value})
  }

  const handleRegistration = async () => {
    console.log(dataRegistration)
  }



  return (
    <Modal title={<span style={{color: "#2E78BD", fontSize: "24px"}}><b>Cadastro de Usuário</b></span>}
      open={openModal}
      onOk={handleRegistration}
      onCancel={() => setOpenModal(false)}
      style={{textAlign: "center"}}
    >
      <h3 style={{marginBottom: "30px", textAlign: "center", color: "#BD3F40"}}><b>Preencha seus dados cadastrais:</b></h3>

      <Input placeholder="Insira seu nome"
       value={dataRegistration?.name}
       onChange={handleName}
       style={{marginBottom: "10px", maxWidth: '60%', }}
      />
      <Input
        placeholder="Insira seu e-mail"
        value={dataRegistration?.login}
        onChange={handleLogin}
        style={{marginBottom: "10px", maxWidth: '60%'}}
      />
      <Input
        placeholder="Insira sua senha"
        value={dataRegistration?.password}
        onChange={handlePassword}
        style={{marginBottom: "10px", maxWidth: '60%'}}
      />
    </Modal>
  );
};

export default UserRegistrationModal;

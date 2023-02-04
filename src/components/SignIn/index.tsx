import React, { useContext, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import LogoLarge from '../../assets/medical-fake-v2-2-w-300px.svg'
import { ContainerLogin, ContentLogin } from '../../styles/components/SignIn/styles';
import { AuthContext } from '../../context/AuthContext';
import UserRegistrationModal from '../UserRegistrationModal';


const SignIn: React.FC = () => {
  const { signIn } = useContext(AuthContext)

  const [openModal, setOpenModal] = useState(false);

  const onFinish = async (values: any) => {
    await signIn(values)
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <ContainerLogin>
      <h1>Seja Bem-vindo!</h1>
      <p>Esta é a <b>CLINICAL FAKE</b>, uma clínica médica fictícia criada como meu projeto de portfólio.</p>
      <p>Navegando neste sistema você vai encontrar várias funcionalidades, requisições de API's e
      componentes criados a partir dos meus conhecimentos técnicos.</p>

      <h5>Por favor, faça seu login para acessar o sistema.</h5>
      <ContentLogin>
        <LogoLarge style={{marginBottom: "20px"}} />
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="login"
            name="login"
            rules={[{ required: true, message: 'por favor, insira seu login!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="senha"
            name="password"
            rules={[{ required: true, message: 'Por favor, isira sua senha!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox style={{float: "right"}}>Lembrar dados</Checkbox>
          </Form.Item>

          <Form.Item  >
            <Button type="link" style={{float: "left"}} onClick={() => setOpenModal(true)}>Não sou cadastrado</Button>
            <Button type="primary" htmlType="submit" style={{float: "right"}}>
              Enviar
            </Button>
          </Form.Item>
        </Form>
        <UserRegistrationModal openModal={openModal} setOpenModal={setOpenModal} />
      </ContentLogin>
    </ContainerLogin>
  );
};

export default SignIn;

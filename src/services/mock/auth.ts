import { v4 as uuid } from 'uuid'

type SignInRequestData = {
  login: string;
  password: string;
}

const deley = (amount = 750) => new Promise(resolve => setTimeout(resolve, amount))

export async  function signInRequest (data: SignInRequestData) {
  //Simula a API de autenticação no Backend feita no método signInRequest no AuthContext
  await deley()

  return {
    token: uuid(),
    user: {
      name: 'Everton Luis da Silva',
      email: 'dmeverton@gmail.com',
      type: 'admin'
    }
  }
}

export async function recoverUserinformation() {
  // Simula a API para buscar os dados do usuário no método recoverUserinformation no useEffect do AuthContext, caso ele já esteja logado, deve passar o token como parâmetro
  await deley()

  return {
    user: {
      name: 'Everton Luis da Silva',
      email: 'dmeverton@gmail.com',
      type: 'admin'
    }
  }
}

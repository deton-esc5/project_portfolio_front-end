import { createContext, useEffect, useState } from "react"
import { setCookie, parseCookies } from 'nookies'
import { recoverUserinformation, signInRequest } from "../services/mock/auth";
import Router from 'next/router'
import { api } from "../services/api";

type UserData = {
  name: string;
  email: string;
  type: string;
}

type SignInData = {
  login: string;
  password: string;
}

type AuthContextType = {
  isAuthenticated: boolean;
  user: UserData;
  signIn: (data: SignInData) => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType)

export function AuthProvider({children}) {
  const [user, setUser] = useState<UserData | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'projectPortfolio.token': token } = parseCookies()

    if (token) {
      recoverUserinformation().then(response => {
        setUser(response.user)
      })
    }
  }, [])

  async function signIn({ login, password }: SignInData) {
    const { token, user } = await signInRequest({
      login,
      password
    })

    setCookie(undefined, 'projectPortfolio.token', token, {maxAge: 60 * 60 * 1, // 1 hour
    })

    api.defaults.headers['Authorization'] = `Bearer ${token}`

    setUser(user)

    Router.push('/')

  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}

import axios from 'axios'
import { basicPost, setToken } from '../base'
import { BASE_URL, SERVER_URL } from '../host'

interface LoginProps {
  username: string
  password: string
}

export const login = async (req: LoginProps) => {
  const body = await axios.post(BASE_URL + 'users/login', req)
  if (body.status == 200) {
    const token = body.headers.authorization.split(' ')[1]
    window.localStorage.setItem('lw-token', token)
  } else {
  }
}

interface RegisterProps {
  email: string
  password: string
}

export const register = async (req: RegisterProps) => {
  const body = await axios.post(BASE_URL + 'users/join', req)

  if (body.data == -1) {
    throw '중복된 이메일입니다.'
  } else {
    await login({ username: req.email, password: req.password })
    return
  }
}

interface ChangePasswordProps {
  token: string
  password: string
}

export const changePassword = async (req: ChangePasswordProps) => {
  const body = await axios.post(BASE_URL + 'users/change-password', req)
}

interface SendPasswordChangeEmail {
  email: string
}

export const sendPasswordChangeEmail = async (req: SendPasswordChangeEmail) => {
  const body = await axios.post(BASE_URL + 'send-mail/password', req)
}

export const sendGetNice = async () => {
  const body = await axios.get(SERVER_URL + 'nice/form')
  return body.data
}

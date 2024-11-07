import axios from 'axios'
import { basicPost, setToken } from '../base'
import { BASE_URL, SERVER_URL } from '../host'

interface LoginProps {
  username: string
  password: string
}

export const login = async (req: LoginProps) => {
  try {
    const body = await axios.post(BASE_URL + 'users/login', req)
    console.log(body.status)
    if (body.status == 200) {
      const token = body.headers.authorization.split(' ')[1]
      window.localStorage.setItem('lw-token', token)
      return true
    }
  } catch (error) {
    console.log(error)
    return false
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

interface RegisterWithVerificationProps {
  email: string
  password: string
  token_version_id: string
  encData: string
  integrity_value: string
}

export const registerWithVerification = async (
  req: RegisterWithVerificationProps
) => {
  const body = await axios.post(BASE_URL + 'nice/decode', req)

  if (body.data?.id == -1) {
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

export const isEmailAvailable = async (email: string) => {
  try {
    const body = await axios.get(BASE_URL + `users/email-check?email=${email}`)
    return body.data
  } catch (error) {
    return false
  }
}

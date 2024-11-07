'use client'
import TextField from '@/app/web/components/common/TextField'
import { validateEmail, validatePassword } from '@/app/utils/validator'
import { useState } from 'react'
import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'
import { Button, BUTTON_TYPE } from '@/app/web/components/common/Button'
import { CustomLink, useCustomNavigate } from '@/app/navigator'
import { useRouter } from 'next/navigation'
import { isEmailAvailable, login, register } from '@/app/apis/guest/user'
import { LOGIN_ACTION_KIND, useLoginContext } from '../provider'

export function FormContainer() {
  const { state, dispatch } = useLoginContext()
  const { isLogin, email, password } = state
  const navigator = useCustomNavigate()
  const onLogin = async () => {
    if (isLogin) {
      const loginSucess = await login({ username: email, password: password })
      console.log(loginSucess)
      if (loginSucess) {
        navigator.push('/web/guest/main/search')
      } else {
        dispatch({
          type: LOGIN_ACTION_KIND.ERROR,
          payload: {
            name: 'passwordError',
            value: '비밀번호를 확인해주세요.',
          },
        })
      }

      // 로그인 과정 진행
    } else {
      // 회원가입 과정 진행
      // await register({ email: email, password: password })
      const jsonString = JSON.stringify({ email, password })
      const base64String = btoa(jsonString)
      const emailAvailable = await isEmailAvailable(email)
      if (emailAvailable) {
        navigator.push(`/web/register/usage-agree?user=${base64String}`)
      } else {
        dispatch({
          type: LOGIN_ACTION_KIND.ERROR,
          payload: {
            name: 'emailError',
            value: '이메일이 중복되었습니다.',
          },
        })
      }
    }
  }

  return (
    <div>
      {isLogin ? <LoginForm /> : <RegisterForm />}
      <div className="flex justify-end">
        <CustomLink href="/web/register/find-password" className="">
          <div className="cursor-pointer text-right text-black text-sm font-normal  underline leading-tight">
            비밀번호를 잊으셨어요?
          </div>
        </CustomLink>
      </div>

      <div className="py-5">
        <Button
          label={isLogin ? '로그인' : '회원가입'}
          buttonType={BUTTON_TYPE.primary}
          onClick={() => {
            onLogin()
          }}
        />
      </div>
      <div className="text-center pb-3">
        <span className="text-black text-sm leading-tight">
          {isLogin ? ' 아직 회원이 아니세요?' : '이미 회원이세요?'}{' '}
        </span>
        <span
          className="text-teal-400 text-sm font-mediumleading-tight"
          onClick={() => {
            dispatch({
              type: LOGIN_ACTION_KIND.TOGGLE_LOGIN,
              payload: {
                value: '',
                name: 'isLogin',
              },
            })
          }}
        >
          {isLogin ? '회원가입' : '로그인'}
        </span>
      </div>
    </div>
  )
}

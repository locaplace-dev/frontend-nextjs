'use client'
import TextField from '@/app/web/components/common/TextField'
import { validateEmail, validatePassword } from '@/app/utils/validator'
import { useState } from 'react'
import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'
import { Button, BUTTON_TYPE } from '@/app/web/components/common/Button'
import { CustomLink, useCustomNavigate } from '@/app/navigator'
import { useRouter } from 'next/navigation'
import { login, register } from '@/app/apis/guest/user'
import { LOGIN_ACTION_KIND, useLoginContext } from '../provider'

export function FormContainer() {
  const { state, dispatch } = useLoginContext()
  const { isLogin, email, password } = state
  const navigator = useCustomNavigate()
  const onLogin = async () => {
    if (isLogin) {
      await login({ username: email, password: password })
      navigator.push('/web/guest/main/search')
      // 로그인 과정 진행
    } else {
      // 회원가입 과정 진행
      // await register({ email: email, password: password })
      const jsonString = JSON.stringify({ email, password })
      const base64String = btoa(jsonString)
      navigator.push(`/web/register/usage-agree?user=${base64String}`)
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
      <div
        className="text-center pb-3"
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
        <span className="text-black text-sm leading-tight">
          {isLogin ? ' 아직 회원이 아니세요?' : '이미 회원이세요?'}{' '}
        </span>
        <span className="text-teal-400 text-sm font-mediumleading-tight">
          {isLogin ? '회원가입' : '로그인'}
        </span>
      </div>
    </div>
  )
}

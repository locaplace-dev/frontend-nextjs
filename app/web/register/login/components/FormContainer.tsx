'use client'
import TextField from '@/app/web/components/common/TextField'
import { validateEmail, validatePassword } from '@/app/utils/validator'
import { useState } from 'react'
import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'
import { Button, BUTTON_TYPE } from '@/app/web/components/common/Button'
import { CustomLink, useCustomNavigate } from '@/app/navigator'
import { useRouter } from 'next/navigation'

export function FormContainer() {
  const [isLogin, setIsLogin] = useState(true)
  const navigator = useCustomNavigate()

  const onLogin = () => {
    if (isLogin) {
      // 로그인 과정 진행
    } else {
      // 회원가입 과정 진행

      navigator.push('/web/register/usage-agree')
    }
  }

  return (
    <div style={{ cursor: 'pointer' }}>
      {isLogin ? <LoginForm /> : <RegisterForm />}
      <CustomLink href="/register/find-password" className="">
        <div className="text-right text-black text-sm font-normal  underline leading-tight">
          비밀번호를 잊으셨어요?
        </div>
      </CustomLink>
      <div className="py-5">
        <Button
          label="로그인"
          buttonType={BUTTON_TYPE.primary}
          onClick={onLogin}
        />
      </div>
      <div
        className="text-center pb-3"
        onClick={() => {
          setIsLogin(!isLogin)
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

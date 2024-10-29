'use client'

import { Button, BUTTON_TYPE } from '@/app/web/components/common/Button'
import TextField from '@/app/web/components/common/TextField'
import { validateEmail, validatePassword } from '@/app/utils/validator'
import { useRef, useState } from 'react'
import {
  SOCIAL_LOGIN_TYPE,
  SocialLoginButton,
} from '../components/SocialLoginBtn'
import { CustomLink } from '@/app/navigator'
import Link from 'next/link'
import { LoginForm } from './components/LoginForm'
import { FormContainer } from './components/FormContainer'
import { TextAppbar } from '@/app/web/components/common/appbar'
import useNaverInit from '@/app/hooks/useNaverInit'

export default function Login() {
  const onClick = (e: React.MouseEvent) => {}
  // useNaverInit()

  const naverRef = useRef<HTMLButtonElement>(null)

  const handleNaverLoginClick = () => {
    if (!naverRef || !naverRef.current || !naverRef.current.children)
      return // 아래 코드는 개발자 도구를 통해 직접 분석해서 사용에 맞게 변경하셔도 좋을 것 같습니다.
    ;(naverRef.current.children[0] as HTMLImageElement).click()
  }
  return (
    <div>
      <TextAppbar name="로그인" />
      <FormContainer />
      <div className="w-full flex-col gap-2.5 inline-flex">
        <SocialLoginButton
          social_type={SOCIAL_LOGIN_TYPE.kakao}
          onClick={onClick}
        />
        <SocialLoginButton
          social_type={SOCIAL_LOGIN_TYPE.apple}
          onClick={onClick}
        />
        <SocialLoginButton
          social_type={SOCIAL_LOGIN_TYPE.google}
          onClick={onClick}
        />
        <SocialLoginButton
          social_type={SOCIAL_LOGIN_TYPE.naver}
          onClick={onClick}
        />
      </div>
    </div>
  )
}

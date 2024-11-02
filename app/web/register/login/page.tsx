'use client'

import { useRef, useState } from 'react'
import {
  SOCIAL_LOGIN_TYPE,
  SocialLoginButton,
} from '../components/SocialLoginBtn'
import { FormContainer } from './components/FormContainer'
import { TextAppbar } from '@/app/web/components/common/appbar'
import { SocialLoginProps } from '@/app/utils/bridge'
import { login } from '@/app/apis/guest/user'
import { useCustomNavigate } from '@/app/navigator'
import { LoginPageProvider, useLoginContext } from './provider'

export default function Wrapper() {
  return (
    <LoginPageProvider>
      <Login />
    </LoginPageProvider>
  )
}

function Login() {
  const {
    state: { isLogin },
    dispatch,
  } = useLoginContext()

  const onClick = (provider: string) => {
    const body: SocialLoginProps = {
      key: 'social:login',
      provider: provider,
    }
    window.bridge.postMessage(JSON.stringify(body))
  }
  // useNaverInit()

  return (
    <div>
      <TextAppbar name={isLogin ? '로그인' : '회원가입'} />
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

'use client'

import { useEffect, useRef, useState } from 'react'
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
import { usePathname, useSearchParams } from 'next/navigation'

export default function Wrapper() {
  return (
    <LoginPageProvider>
      <Login />
    </LoginPageProvider>
  )
}
// https://locaplace-web.vercel.app/web/register/login?
// token_version_id=2024110300573926-NCDFCE759-F0HHA-7C901AH0A1
// &enc_data=jF8VDy8S%2BYx3rxvMM7nfNzTjTEFYc%2FlwHWdIMnzQ9Cazrz3i32ZjdqmLNp%2BM1KLFkIj9GoPmYdjtwfMn4uWq%2Bx7Ue6eVWINYNYe3DkXHnHy4wvsQhjQdvB8Fhwpd7K5jEMMV9sebZSnM5CTAO85Bv%2BCPH0tviLKu%2BflkvuvCgzhnMcJ%2BdhbVq1aEdbRkro203vLBBEkXU0FebZhRhmIOOe2RACdf7BNjXUjlkV7lIVRP9Ey2saFiej%2FmF4zpFJHUM8RLM8S907ewJDin0HTJ6GgZORVm1CHZbNSmsU5rpxwBOA6%2F1wIg3s4yN0gVs%2BN0niXkHNzkzqGsWu9Qve9Z%2BAk89cPk02hOYgMZVGK8hhcSOOHKr8agDwad8%2FeTIWD2LfYxQh%2FkrtmA%2BPwxUZ1NwwpGPm8BFLl5cw8KJOy94ST86OFL2u1kGcl51xONtbEcrEC6m8fZDXOb%2B37j0%2B%2BOGXYPEp7kaW%2BgnYMCGsTSTNdh4RrZuNhcVBaU2hoq6zrSYVdQ04c45MkQ8Ecu5WCnTd4bGwXRcIOKtSRhdXuq2DQBSxX%2Bej83GYdAHcol1Ff%2BHZ7mP53qAOv%2FEDUHOSo43cE5xD4K89PHGZhoBtwtmZy5jikNjZyz7lXTEwE3dDseLbme7IQzxSAcJqSELsRxk8PMtK2tmi4Lq65rDjlG1B1Z%2FmqoPGltMgQOyOlbRfv7
// &integrity_value=9UUFnodQpCpD5h8hEByF%2BDXKU65%2F%2B7odlkflt6C6euE%3D

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
  const searchParams = useSearchParams()
  useEffect(() => {
    if (window.opener != null) {
      window.opener.postMessage(
        JSON.stringify({
          token_version_id: searchParams.get('token_version_id'),
          enc_data: searchParams.get('enc_data'),
          integrity_value: searchParams.get('integrity_value'),
        }),
        window.location.origin
      )
      if (searchParams.get('token_version_id')) {
        window.close()
      }
      // console.log('asdf')
    }
  }, [searchParams])
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

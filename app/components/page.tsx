'use client'

import { useState } from 'react'
import { Button, BUTTON_TYPE } from '../ui/common/Button'
import TextField from '../ui/common/TextField'
import { UsageFooter } from '../ui/common/Usage'
import {
  SOCIAL_LOGIN_TYPE,
  SocialLoginButton,
} from '../register/components/SocialLoginBtn'
import { validateEmail, validateName, validatePhone } from '../utils/validator'
import UsageAgreeButton from '../register/usage-agree/components/UsageAgreeBtn'

export default function About() {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  // 이메일 유효성 검사
  const handleEmailChange = (value: string) => {
    setEmail(value)
    if (value && !validateEmail(value)) {
      setEmailError('올바르지 않은 이메일 형식입니다')
    } else {
      setEmailError('')
    }
  }

  return (
    <div className="bg-white px-4 py-4">
      <UsageFooter />
      <Button label="로그인" buttonType={BUTTON_TYPE.primary} />
      <Button label="로그인으로 돌아가기" buttonType={BUTTON_TYPE.secondary} />
      <Button label="로그인으로 돌아가기" buttonType={BUTTON_TYPE.secondary} />
      <SocialLoginButton social_type={SOCIAL_LOGIN_TYPE.apple} />
      <SocialLoginButton social_type={SOCIAL_LOGIN_TYPE.kakao} />
      <SocialLoginButton social_type={SOCIAL_LOGIN_TYPE.naver} />
      <SocialLoginButton social_type={SOCIAL_LOGIN_TYPE.google} />
      <TextField
        type="email"
        label="이메일"
        value={email}
        onChange={handleEmailChange}
        error={emailError}
      />
      <UsageAgreeButton
        name=""
        click={() => {}}
        href="/"
        underline="asdf"
        title="asdf"
        active={true}
      />
      <UsageAgreeButton
        name=""
        click={() => {}}
        href="/"
        active={false}
        underline="asdf"
        title="asdf"
      />
    </div>
  )
}

'use client'
import TextField from '@/app/web/components/common/TextField'
import { validateEmail, validatePassword } from '@/app/utils/validator'
import { useState } from 'react'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [password, setPassword] = useState('')

  const [passwordError, setPasswordError] = useState('')
  // 이메일 유효성 검사
  const handleEmailChange = (value: string) => {
    setEmail(value)
    if (value && !validateEmail(value)) {
      setEmailError('올바르지 않은 이메일 형식입니다')
    } else {
      setEmailError('')
    }
  }

  // 비밀번호 유효성 검사
  const handlePasswordChange = (value: string) => {
    setPassword(value)
    if (value && !validatePassword(value)) {
      setPasswordError(
        '비밀번호는 8자리 이상, 숫자와 특수문자를 포함해야 합니다'
      )
    } else {
      setPasswordError('')
    }
  }
  return (
    <div>
      <TextField
        type="email"
        label="이메일"
        value={email}
        onChange={handleEmailChange}
        error={emailError}
      />
      <TextField
        type="password"
        label="비밀번호"
        value={password}
        onChange={handlePasswordChange}
        error={passwordError}
      />
    </div>
  )
}

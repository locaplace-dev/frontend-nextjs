'use client'

import { useCustomNavigate } from '@/app/navigator'
import { BackAppbar } from '@/app/ui/common/appbar'
import { Button, BUTTON_TYPE } from '@/app/ui/common/Button'
import PageTitle from '@/app/ui/common/pageTitle'
import TextField from '@/app/ui/common/TextField'
import { validatePassword } from '@/app/utils/validator'
import { useState } from 'react'

export default function ChangePassword() {
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [passwordErrorConfirm, setPasswordErrorConfirm] = useState('')

  const navigator = useCustomNavigate()

  const handlePasswordChange = (value: string) => {
    setPassword(value)
    if (value && !validatePassword(value)) {
      setPasswordError('올바르지 않은 비밀번호 형식입니다')
    } else {
      setPasswordError('')
    }
  }
  const handlePasswordConfirmChange = (value: string) => {
    setPasswordConfirm(value)
    if (value && !validatePassword(value)) {
      setPasswordErrorConfirm('올바르지 않은 비밀번호 형식입니다')
    } else {
      setPasswordErrorConfirm('')
    }
  }
  return (
    <div>
      <BackAppbar />
      <PageTitle title="비밀번호 변경하기" />
      <div>
        <TextField
          type="password"
          label="새로운 비밀번호"
          value={password}
          onChange={handlePasswordChange}
          error={passwordError}
        />
        <TextField
          type="password"
          label="비밀번호 확인"
          value={passwordConfirm}
          onChange={handlePasswordConfirmChange}
          error={passwordErrorConfirm}
        />
      </div>
      <Button
        buttonType={BUTTON_TYPE.primary}
        label="확인"
        onClick={() => {
          navigator.replace('/register/login')
        }}
      />
    </div>
  )
}

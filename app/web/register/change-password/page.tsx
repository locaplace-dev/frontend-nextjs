'use client'

import { useCustomNavigate } from '@/app/navigator'
import { BackAppbar } from '@/app/web/components/common/appbar'
import { Button, BUTTON_TYPE } from '@/app/web/components/common/Button'
import PageTitle from '@/app/web/components/common/pageTitle'
import TextField from '@/app/web/components/common/TextField'
import { validatePassword } from '@/app/utils/validator'
import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { changePassword } from '@/app/apis/guest/user'

export default function ChangePassword() {
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [passwordErrorConfirm, setPasswordErrorConfirm] = useState('')

  const navigator = useCustomNavigate()
  const param = useSearchParams()
  console.log()

  const handlePasswordChange = (value: string) => {
    setPassword(value)
    if (value && !validatePassword(value)) {
      setPasswordError(
        '비밀번호는 8자리 이상, 숫자와 특수문자를 포함해야 합니다.'
      )
    } else {
      setPasswordError('')
    }
  }
  const handlePasswordConfirmChange = (value: string) => {
    setPasswordConfirm(value)
    if (value && !validatePassword(value)) {
      setPasswordErrorConfirm('비밀번호가 일치하지 않습니다.')
    } else {
      setPasswordErrorConfirm('')
    }
  }

  const changePasswordUI = async () => {
    await changePassword({
      token: param.get('token') ?? '',
      password: password,
    })
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
        onClick={async () => {
          await changePasswordUI()
          navigator.replace('/web/register/login')
        }}
      />
    </div>
  )
}

'use client'

import { Button, BUTTON_TYPE } from '@/app/web/components/common/Button'
import PageTitle from '@/app/web/components/common/pageTitle'
import TextField from '@/app/web/components/common/TextField'
import { validateEmail } from '@/app/utils/validator'
import { useState } from 'react'
import { sendPasswordChangeEmail } from '@/app/apis/guest/user'

interface InputEmailProps {
  onConfirm: Function
  onCancel: Function
}

export const InputEmail = ({ onConfirm, onCancel }: InputEmailProps) => {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const handleEmailChange = (value: string) => {
    setEmail(value)
    if (value && !validateEmail(value)) {
      setEmailError('올바르지 않은 이메일 형식입니다')
    } else {
      setEmailError('')
    }
  }
  return (
    <div>
      <PageTitle title="비밀번호 변경하기" />
      <TextField
        type="email"
        label="이메일"
        value={email}
        onChange={handleEmailChange}
        error={emailError}
      />
      <div className=" w-full flex-col justify-start items-start gap-2.5 inline-flex">
        <Button
          onClick={async () => {
            sendPasswordChangeEmail({ email: email })
            onConfirm()
          }}
          buttonType={BUTTON_TYPE.primary}
          label="이메일 전송"
        />
        <Button
          onClick={() => {
            onCancel()
          }}
          buttonType={BUTTON_TYPE.secondary}
          label="로그인으로 돌아가기"
        />
      </div>
    </div>
  )
}

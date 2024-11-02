'use client'

import { BackAppbar } from '@/app/web/components/common/appbar'
import { InputEmail } from './components/input-email'
import { useState } from 'react'
import CheckEmail from './components/check-email'
import { useCustomNavigate } from '@/app/navigator'
import { sendPasswordChangeEmail } from '@/app/apis/guest/user'

export default function ResetPassword() {
  const navigator = useCustomNavigate()
  const [step, setStep] = useState(0)

  return (
    <div className="w-full">
      <BackAppbar />
      {step == 0 ? (
        <InputEmail
          onConfirm={async () => {
            setStep(1)
          }}
          onCancel={() => {
            navigator.back()
          }}
        />
      ) : (
        <CheckEmail
          onConfirm={() => {
            navigator.back()
          }}
        />
      )}
    </div>
  )
}

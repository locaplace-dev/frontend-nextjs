'use client'

import { Button, BUTTON_TYPE } from '@/app/web/components/common/Button'
import PageTitle from '@/app/web/components/common/pageTitle'
import TextField from '@/app/web/components/common/TextField'
import { validateEmail } from '@/app/utils/validator'
import { useState } from 'react'

interface CheckEmailProp {
  onConfirm: Function
}

export default function CheckEmail({ onConfirm }: CheckEmailProp) {
  return (
    <div>
      <PageTitle title="이메일을 확인해주세요" />
      <div className="h-16 flex-col justify-start items-start gap-2 inline-flex">
        <div className="w-full text-black text-sm leading-snug">
          입력하신 이메일로 링크를 전송했습니다.
          <br />
          만약 보이지 않는다면 스팸함을 확인해주세요.
        </div>
      </div>
      <Button
        buttonType={BUTTON_TYPE.primary}
        label="확인"
        onClick={() => {
          onConfirm()
        }}
      />
    </div>
  )
}

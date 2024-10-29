'use client'

import { Button, BUTTON_TYPE } from '@/app/web/components/common/Button'
import PageTitle from '@/app/web/components/common/pageTitle'
import SelectButton from '@/app/web/components/common/SelectButton'
import TextField from '@/app/web/components/common/TextField'

export default function PaymentMethod() {
  return (
    <div className="px-4 w-full">
      <PageTitle title="결제수단 등록" />

      <SelectButton label="카드사" />
      <TextField
        type="text"
        label="유효기간"
        value={'ㅁㄴㅇㄹ'}
        onChange={(value: string) => {}}
        error={'ㅁㄴㅇㄹ'}
      />
      <TextField
        type="text"
        label="유효기간"
        value={'ㅁㄴㅇㄹ'}
        onChange={(value: string) => {}}
        error={'ㅁㄴㅇㄹ'}
      />
      <TextField
        type="number"
        label="CVC번호"
        value={'123'}
        onChange={(value: string) => {}}
        error={'ㅁㄴㅇㄹ'}
      />
      <TextField
        type="text"
        label="카드 비밀번호"
        value={''}
        onChange={(value: string) => {}}
        error={'ㅁㄴㅇㄹ'}
      />
      <Button label="등록" buttonType={BUTTON_TYPE.primary} />
    </div>
  )
}

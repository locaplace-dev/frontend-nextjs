'use client'

import { Button, BUTTON_TYPE } from '@/app/web/components/common/Button'
import UsageAgreeButton from './components/UsageAgreeBtn'
import { useState } from 'react'
import Image from 'next/image'
import { useCustomNavigate } from '@/app/navigator'
import { BackAppbar } from '@/app/web/components/common/appbar'

type UsageType = {
  usage: boolean
  privacy: boolean
  location: boolean
  marketing: boolean
  adult: boolean
}

export default function UsageAgree() {
  const [usage, setUsage] = useState<UsageType>({
    usage: false,
    privacy: false,
    location: false,
    marketing: false,
    adult: false,
  })

  const navigator = useCustomNavigate()

  const changeUsageHandler = (name: keyof UsageType) => {
    setUsage({
      ...usage,
      [name]: !usage[name],
    })
  }

  return (
    <div>
      <BackAppbar />
      <div className="text-black text-2xl leading-10">약관동의</div>
      <div className="w-full py-5 flex-col justify-start items-stretch gap-3 inline-flex">
        <UsageAgreeButton
          active={usage.usage}
          name="usage"
          click={changeUsageHandler}
          underline="이용약관"
          title="에 동의합니다.(필수)"
          href="/register/usage-agree/usage"
        />
        <UsageAgreeButton
          active={usage.adult}
          name="adult"
          click={changeUsageHandler}
          underline="만 19세 이상"
          title="입니다.(필수)"
          href="/register/usage-agree/adult"
        />
        <UsageAgreeButton
          active={usage.privacy}
          name="privacy"
          click={changeUsageHandler}
          underline="개인정보 취급방침"
          title="에 동의합니다.(필수)"
          href="/register/usage-agree/privacy"
        />
        <UsageAgreeButton
          active={usage.location}
          name="location"
          click={changeUsageHandler}
          underline="위치정보 수집 이용에 대해 동의"
          title="합니다.(필수)"
          href="/register/usage-agree/location"
        />
        <UsageAgreeButton
          active={usage.marketing}
          name="marketing"
          underline="마케팅 정보 수신"
          click={changeUsageHandler}
          title="에 동의합니다.(선택)"
          href="/register/usage-agree/marketing"
        />
      </div>
      <div className="w-full pt-5 pb-7 flex-col justify-start items-start gap-2.5 inline-flex">
        <Button label="전체동의" buttonType={BUTTON_TYPE.inactive} />
        <Button
          label="휴대폰 본인 인증하기"
          buttonType={BUTTON_TYPE.inactive}
        />
      </div>
    </div>
  )
}

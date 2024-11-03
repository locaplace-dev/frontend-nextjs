'use client'

import { Button, BUTTON_TYPE } from '@/app/web/components/common/Button'
import UsageAgreeButton from './components/UsageAgreeBtn'
import { useRef, useState } from 'react'
import Image from 'next/image'
import { useCustomNavigate } from '@/app/navigator'
import { BackAppbar } from '@/app/web/components/common/appbar'
import { usePathname, useSearchParams } from 'next/navigation'
import {
  USAGE_ACTION_KIND,
  UsageAgreeProvider,
  useUsageAgreeContext,
} from './provider'
import { a } from 'framer-motion/client'
import { sendGetNice } from '@/app/apis/guest/user'

type UsageType = {
  usage: boolean
  privacy: boolean
  location: boolean
  marketing: boolean
  adult: boolean
}

export default function Wrapper() {
  return (
    <UsageAgreeProvider>
      <UsageAgree />
    </UsageAgreeProvider>
  )
}

function UsageAgree() {
  const { state, dispatch } = useUsageAgreeContext()
  const [niceData, setNiceData] = useState<HidedNiceInputsProps | null>(null)
  const navigator = useCustomNavigate()
  const param = useSearchParams()
  const base64User = param.get('user')
  const user = atob(base64User ?? '')
  const formRef = useRef<HTMLFormElement>(null)
  function fnPopup() {
    window.open(
      'https://nice.checkplus.co.kr/CheckPlusSafeModel/service.cb',
      'popupChk',
      'width=500, height=550, top=100, left=100, fullscreen=no, menubar=no, status=no, toolbar=no, titlebar=yes, location=no, scrollbar=no'
    )
    if (formRef != null) {
      formRef.current.action =
        'https://nice.checkplus.co.kr/CheckPlusSafeModel/service.cb'
      formRef.current.target = 'popupChk'
      formRef.current.submit()
    }
  }

  console.log(user)

  const changeUsageHandler = (name: keyof UsageType) => {
    dispatch({
      type: USAGE_ACTION_KIND.TOGGLE,
      payload: {
        name,
      },
    })
    // setUsage({
    //   ...usage,
    //   [name]: !usage[name],
    // })
  }

  return (
    <div>
      <BackAppbar />
      <div className="text-black text-2xl leading-10">약관동의</div>
      <div className="w-full py-5 flex-col justify-start items-stretch gap-3 inline-flex">
        <UsageAgreeButton
          active={state.usage}
          name="usage"
          click={changeUsageHandler}
          underline="이용약관"
          title="에 동의합니다.(필수)"
          href="/web/register/usage-agree/usage"
        />
        <UsageAgreeButton
          active={state.adult}
          name="adult"
          click={changeUsageHandler}
          underline="만 19세 이상"
          title="입니다.(필수)"
          href="/web/register/usage-agree/adult"
        />
        <UsageAgreeButton
          active={state.privacy}
          name="privacy"
          click={changeUsageHandler}
          underline="개인정보 취급방침"
          title="에 동의합니다.(필수)"
          href="/web/register/usage-agree/privacy"
        />
        <UsageAgreeButton
          active={state.location}
          name="location"
          click={changeUsageHandler}
          underline="위치정보 수집 이용에 대해 동의"
          title="합니다.(필수)"
          href="/web/register/usage-agree/location"
        />
        <UsageAgreeButton
          active={state.marketing}
          name="marketing"
          underline="마케팅 정보 수신"
          click={changeUsageHandler}
          title="에 동의합니다.(선택)"
          href="/web/register/usage-agree/marketing"
        />
      </div>
      <div className="w-full pt-5 pb-7 flex-col justify-start items-start gap-2.5 inline-flex">
        <Button
          label="전체동의"
          buttonType={BUTTON_TYPE.secondary}
          onClick={() => {
            dispatch({
              type: USAGE_ACTION_KIND.TOGGLE_ALL,
              payload: {
                name: 'adult',
              },
            })
          }}
        />
        <Button
          label="휴대폰 본인 인증하기"
          buttonType={
            state.usage && state.adult && state.privacy && state.location
              ? BUTTON_TYPE.primary
              : BUTTON_TYPE.inactive
          }
          onClick={async () => {
            if (state.usage && state.adult && state.privacy && state.location) {
              const body = (await sendGetNice()) as HidedNiceInputsProps
              setNiceData(body)
              fnPopup()
            }
          }}
        />
      </div>
      {niceData && <HidedNiceInputs {...niceData} formRef={formRef} />}
    </div>
  )
}

interface HidedNiceInputsProps {
  token_version_id: string
  enc_data: string
  integrity_value: string
  formRef: React.Ref<HTMLFormElement>
}
const HidedNiceInputs = ({
  token_version_id,
  enc_data,
  integrity_value,
  formRef,
}: HidedNiceInputsProps) => {
  return (
    <form ref={formRef} name="form_chk" id="form_chk" method="post">
      <input type="hidden" id="m" name="m" value="service" />
      <input
        type="hidden"
        id="token_version_id"
        name="token_version_id"
        value={token_version_id}
      />
      <input type="hidden" id="enc_data" name="enc_data" value={enc_data} />
      <input
        type="hidden"
        id="integrity_value"
        name="integrity_value"
        value={integrity_value}
      />
    </form>
  )
}

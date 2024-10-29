import { Button, BUTTON_TYPE } from '@/app/ui/common/Button'
import PageTitle from '@/app/ui/common/pageTitle'
import Image from 'next/image'

export default function CSPage() {
  return (
    <div className="w-full">
      <div className="px-4 flex flex-col ">
        <PageTitle title="로카플레이스 문의하기" />
        <div className="pb-7 justify-start items-center gap-2.5 inline-flex">
          <div className="grow shrink basis-0 text-black text-base font-normal font-['Spoqa Han Sans Neo'] leading-normal">
            모든 문의는 1:1 상담 채널톡을 이용해주세요.
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src={'/images/channeltalk.svg'}
            alt="channeltak"
            width={250}
            height={250}
          />
        </div>
        <div className="pt-7">
          <Button
            label="로카플레이스 문의하기"
            buttonType={BUTTON_TYPE.primary}
          />
        </div>
      </div>
    </div>
  )
}

'use client'

import { useCustomNavigate } from '@/app/navigator'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

type TextAppbarProps = {
  name: string // 부모컴포넌트에서 import 해온 타입을 재사용 해 줍시다.
}

export const TextAppbar = ({ name }: TextAppbarProps) => {
  return (
    <div className="h-16 pb-3.5 justify-start items-center  inline-flex">
      <div className="text-black text-2xl leading-10">{name}</div>
    </div>
  )
}

type BackAppbarProps = {
  isWhite?: boolean // 부모컴포넌트에서 import 해온 타입을 재사용 해 줍시다.
}

export const BackAppbar = ({ isWhite }: BackAppbarProps) => {
  const navigator = useCustomNavigate()
  return (
    <div
      onClick={() => {
        navigator.back()
      }}
      className=" h-16 justify-start items-center gap-5 inline-flex cursor-pointer"
    >
      <Image
        src={`/images/${isWhite ? 'ic_back_white' : 'ic_back'}.svg`}
        alt="back"
        width={40}
        height={40}
      />
    </div>
  )
}

export const CloseAppbar = () => {
  const navigator = useCustomNavigate()
  return (
    <div
      onClick={() => {
        navigator.back()
      }}
      className="h-16 w-full justify-end  inline-flex cursor-pointer"
    >
      <Image
        width={40}
        height={40}
        src={'/images/ic_close.svg'}
        alt="close-button"
      />
    </div>
  )
}

export const MainAppbar = () => {
  const navigator = useCustomNavigate()
  const pathname = usePathname()
  return (
    <div className="w-full h-16  py-3.5 flex-row justify-between items-center inline-flex">
      {pathname == '/web/guest/main/search' ? (
        <div className="w-28 h-9 relative">
          <Image
            src={'/images/img_loca.svg'}
            alt="main-logo"
            width={110}
            height={36}
          />

          <div className="w-28 h-5 left-[1px] top-[7px] absolute">
            <div className="w-4 h-2 left-[57px] top-[11px] absolute bg-teal-400" />
          </div>
        </div>
      ) : (
        <div className="w-16 h-10 text-2xl leading-10">
          {pathname == '/web/guest/main/reservations'
            ? '예약'
            : pathname == '/web/guest/main/chats'
            ? '채팅'
            : '마이'}
        </div>
      )}

      <div className="justify-end items-center gap-2 flex">
        <Image
          src="/images/ic_language.svg"
          alt="language-change"
          width={34}
          height={34}
        />
        <Image src="/images/ic_alarm.svg" alt="alarm" width={34} height={34} />
      </div>
    </div>
  )
}

export default {
  TextAppbar,
}

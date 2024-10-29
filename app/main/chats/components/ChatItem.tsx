'use client'

import { useCustomNavigate } from '@/app/navigator'
import ChatStatus from './ChatStatus'

export interface ChatItemProps {
  id: number
  name: string
  lastChat: string
  startDate: string
  endDate: string
  chatStatus: number
  profileImg: string
  productImg: string
}

export default function ChatItem({
  name,
  lastChat,
  startDate,
  endDate,
  chatStatus,
  productImg,
  profileImg,
  id,
}: ChatItemProps) {
  const useNavigator = useCustomNavigate()
  return (
    <div
      onClick={() => {
        useNavigator.push(`/chats/${id}`)
      }}
      className="cursor-pointer h-24 px-4 py-4 bg-white rounded-xl flex-col justify-center items-start gap-1.5 inline-flex shadow"
    >
      <div className="self-stretch justify-center items-center gap-3 inline-flex">
        <div className="w-16 h-16 relative">
          <div className="w-16 h-16 left-0 top-0 absolute bg-neutral-50 rounded-full border border-gray-200" />
        </div>
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
          <div className="self-stretch justify-between items-center inline-flex">
            <div className="flex">
              <div className="text-sm font-medium leading-tight">{name}</div>
              <div className="ml-1 w-1 h-1 bg-teal-400 rounded-full" />
            </div>
            <ChatStatus status={chatStatus} />
          </div>
          <div className="self-stretch h-9 flex-col justify-start items-start flex">
            <div className="self-stretch h-4 text-xs leading-none">
              {lastChat}
            </div>
            <div className="self-stretch h-4 text-neutral-400 text-xs font-['Montserrat'] leading-none">
              {startDate} - {endDate}
            </div>
          </div>
        </div>
        <div className="w-12 h-12 relative">
          <div className="w-12 h-12  bg-zinc-300 rounded-full" />
        </div>
      </div>
    </div>
  )
}

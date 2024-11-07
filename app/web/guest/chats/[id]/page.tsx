'use client'

import { BackAppbar } from '@/app/web/components/common/appbar'
import ReserveItem from '@/app/web/components/common/ReserveItem'
import ChatWriter from './components/ChatWriter'
import ChatRoom from './components/ChatRoom'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getChatInfo, IChatInfo } from '@/app/apis/guest/chat'

export default function ChatPage() {
  const [chat, setChat] = useState<IChatInfo | null>(null)
  const route = useParams()

  const fetchChatInfo = async (chatId: number) => {
    const result = await getChatInfo(chatId)
    setChat(result)
  }

  useEffect(() => {
    fetchChatInfo(Number(route.id))
  }, [])

  return (
    <div className="w-full h-full flex-col flex flex-1">
      <div className="px-4 flex flex-col flex-1">
        <BackAppbar />
        <ReserveItem
          id={chat?.chatId}
          title={chat?.productTitle}
          address={chat?.address}
          startDate={chat?.startDate}
          endDate={chat?.endDate}
          isChecked={chat?.isUpdate}
          status={chat?.status}
          needCheck={chat?.isUpdate}
        />
        <div
          className="overflow-y-auto flex-1"
          // style={{ height: 'calc(100% - 19.75rem )' }}
        >
          <ChatRoom roomId={Number(route.id)} myId={2} />
        </div>
      </div>
      <ChatWriter roomId={Number(route.id)} myId={2} />
    </div>
  )
}

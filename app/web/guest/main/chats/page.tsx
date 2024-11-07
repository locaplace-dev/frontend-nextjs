'use client'

import { useEffect, useState } from 'react'
import ChatItem, { ChatItemProps } from './components/ChatItem'
import Suggestion from '../reservations/components/SuggestLogin'
import { getChatList } from '@/app/apis/guest/chat'
import { ChatListRes, IChatListItem } from '@/app/apis/guest/Ichat'

const initChatItemState = [
  {
    id: 1,
    name: '홍수아',
    lastChat: '안녕하세요',
    startDate: '2024.10.27',
    endDate: '2024.10.27',
    chatStatus: 1,
    profileImg: '',
    productImg: '',
  },
  {
    id: 2,
    name: '홍수아',
    lastChat: '안녕하세요',
    startDate: '2024.10.27',
    endDate: '2024.10.27',
    chatStatus: 2,
    profileImg: '',
    productImg: '',
  },
  {
    id: 3,
    name: '홍수아',
    lastChat: '안녕하세요',
    startDate: '2024.10.27',
    endDate: '2024.10.27',
    chatStatus: 3,
    profileImg: '',
    productImg: '',
  },
  {
    id: 4,
    name: '홍수아',
    lastChat: '안녕하세요',
    startDate: '2024.10.27',
    endDate: '2024.10.27',
    chatStatus: 4,
    profileImg: '',
    productImg: '',
  },
  {
    id: 5,
    name: '홍수아',
    lastChat: '안녕하세요',
    startDate: '2024.10.27',
    endDate: '2024.10.27',
    chatStatus: 5,
    profileImg: '',
    productImg: '',
  },
  {
    id: 6,
    name: '홍수아',
    lastChat: '안녕하세요',
    startDate: '2024.10.27',
    endDate: '2024.10.27',
    chatStatus: 6,
    profileImg: '',
    productImg: '',
  },
]

export default function Chatpage() {
  const [chats, setChats] = useState<IChatListItem[]>([])

  const fetchChats = async () => {
    const result = (await getChatList()) as ChatListRes
    setChats(result)
  }

  useEffect(() => {
    fetchChats()
  }, [])
  return (
    <div className="flex-1 inline-flex flex-col gap-2">
      {chats.length == 0 ? (
        <Suggestion />
      ) : (
        chats.map((item, idx) => {
          return <ChatItem key={`chats-${idx}`} {...item} />
        })
      )}
    </div>
  )
}

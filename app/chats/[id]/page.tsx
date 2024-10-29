'use client'

import { BackAppbar } from '@/app/ui/common/appbar'
import { ProductItem } from '@/app/ui/common/ProductItem'
import ReserveItem from '@/app/ui/common/ReserveItem'
import ChatWriter from './components/ChatWriter'
import OpChats from './components/OpChats'
import MyChats from './components/MyChats'
import ChatRoom from './components/ChatRoom'
import { useParams } from 'next/navigation'

export default function ChatPage() {
  const route = useParams()

  return (
    <div className="w-full h-full flex-col flex">
      <div className="px-4">
        <BackAppbar />
        <ReserveItem
          title="역세권 숲 속의 아늑한 공간"
          address="서울시 강남구 논현동"
          startDate="2024.10.27"
          endDate="2024.11.27"
          isChecked={false}
        />
        <ChatRoom roomId={Number(route.id)} myId={2} />
        <div className="h-16"></div>
      </div>

      <ChatWriter roomId={Number(route.id)} myId={2} />
    </div>
  )
}

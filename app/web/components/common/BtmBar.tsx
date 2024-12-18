'use client'

import { useCustomNavigate } from '@/app/navigator'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { HTMLAttributes } from 'react'

export function BtmBar() {
  const useNavigation = useCustomNavigate()
  const pathname = usePathname()
  console.log(pathname)
  return (
    <div className="bottom-0 left-0 fixed w-full h-16 px-10 py-2.5 bg-white shadow justify-between items-center inline-flex">
      <TabItem
        image="search"
        label="검색"
        active={pathname == '/web/guest/main/search'}
        onClick={() => {
          useNavigation.push('/web/guest/main/search')
        }}
      />
      <TabItem
        image="reservation"
        label="예약"
        active={pathname == '/web/guest/main/reservations'}
        onClick={() => {
          useNavigation.push('/web/guest/main/reservations')
        }}
      />
      <TabItem
        image="chat"
        label="채팅"
        active={pathname == '/web/guest/main/chats'}
        onClick={() => {
          useNavigation.push('/web/guest/main/chats')
        }}
      />
      <TabItem
        image="my"
        label="마이"
        active={pathname == '/web/guest/main/my'}
        onClick={() => {
          useNavigation.push('/web/guest/main/my')
        }}
      />
    </div>
  )
}

interface TabItemProps extends HTMLAttributes<HTMLDivElement> {
  image: string
  label: string
  active: Boolean | null
}

function TabItem({ image, label, active, onClick }: TabItemProps) {
  return (
    <div
      className="flex-col justify-between items-center inline-flex h-10 cursor-pointer"
      onClick={onClick}
    >
      <Image
        src={`/images/ic_${image}_tabbar_${active ? '' : 'un'}selected.svg`}
        alt="ic_search_tab"
        width={26}
        height={26}
      />
      <div
        className={`w-10 text-center text-${
          active ? 'teal' : 'zinc'
        }-400 text-xs font-medium leading-none`}
      >
        {label}
      </div>
    </div>
  )
}

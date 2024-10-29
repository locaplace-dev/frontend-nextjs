'use client'

import { useCustomNavigate } from '@/app/navigator'
import { MouseEventHandler } from 'react'

export interface OptionItemProps {
  title: string
  actions: Function
  blurred?: boolean
  route?: string
}

export default function OptionItem({
  title,
  actions,
  blurred,
  route,
}: OptionItemProps) {
  const router = useCustomNavigate()

  const eventHandler = () => {
    if (route) {
      router.push(route)
    } else {
      actions()
    }
  }

  return (
    <div
      onClick={eventHandler}
      className="cursor-pointer h-16 py-5 bg-white flex-col justify-center items-start gap-2.5 inline-flex"
    >
      <div
        className={`self-stretch h-5 ${
          blurred ? 'text-neutral-400' : 'text-black'
        }  text-base font-normal font-['SpoqaHanSans'] leading-relaxed`}
      >
        {title}
      </div>
    </div>
  )
}

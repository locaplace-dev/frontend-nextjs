'use client'

import { useCustomNavigate } from '@/app/navigator'
import OptionItem, { OptionItemProps } from '@/app/ui/common/TextOptionItem'

const options: Array<OptionItemProps> = [
  {
    title: '나의소개 작성',
    actions: () => {},
  },
  {
    title: '결제수단 등록',
    actions: () => {},
    route: '/my/payment-method',
  },
  {
    title: '나의 예약 내역',
    actions: () => {},
    route: '/my/reservations',
  },
  {
    title: '나의 리뷰 내역',
    actions: () => {},
    route: '/my/reviews',
  },
  {
    title: '나의 좋아요 내역',
    actions: () => {},
    route: '/my/wishlist',
  },
]

export function MyPageOptions() {
  return (
    <div className="flex flex-col">
      {options.map((item, idx) => (
        <OptionItem key={`options-${idx}`} {...item} />
      ))}
    </div>
  )
}

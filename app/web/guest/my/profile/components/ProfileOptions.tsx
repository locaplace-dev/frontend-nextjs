'use client'

import Divider from '@/app/web/components/common/Divider'
import OptionItem, {
  OptionItemProps,
} from '@/app/web/components/common/TextOptionItem'

const options: Array<OptionItemProps> = [
  {
    title: '비밀번호 변경',
    actions: () => {},
    route: '/web/register/find-password',
  },
  {
    title: 'FAQ',
    actions: () => {},
    route: '/web/guest/my/faq',
  },
  {
    title: '공지사항',
    actions: () => {},
    route: '/web/guest/my/notice',
  },
  {
    title: '1:1 상담 채널톡',
    actions: () => {},
    route: '/web/guest/my/cs',
  },
]

const unRecommendOptions: Array<OptionItemProps> = [
  {
    title: '로그아웃',
    actions: () => {},
    blurred: true,
  },
  {
    title: '회원탈퇴',
    actions: () => {},
    blurred: true,
  },
]

export default function ProfileOptions() {
  return (
    <div className="flex flex-col ">
      <div className="px-4 flex flex-col">
        {options.map((item, idx) => (
          <OptionItem key={`options-${idx}`} {...item} />
        ))}
      </div>
      <Divider />
      <div className="px-4 flex flex-col">
        {unRecommendOptions.map((item, idx) => (
          <OptionItem key={`unRecommendOptions-${idx}`} {...item} />
        ))}
      </div>
    </div>
  )
}

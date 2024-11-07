'use client'

import { useState } from 'react'
import SubTitle from './SubTitle'

export default function ProductComment({ comment }: { comment: string }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const MAX_LENGTH = 100

  // 더보기/접기 토글
  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className="flex-col justify-start items-start inline-flex w-full">
      <SubTitle subtitle="소개" />
      <div className="pb-5 justify-center items-center gap-2.5 inline-flex">
        <div>
          <span className="text-black text-sm font-normal font-['Spoqa Han Sans Neo'] leading-tight">
            {isExpanded || comment.length <= MAX_LENGTH
              ? comment
              : `${comment.slice(0, MAX_LENGTH)}...`}
            <br />
            <br />
          </span>
          <span
            onClick={toggleExpand}
            className="cursor-pointer text-black text-sm font-normal font-['Spoqa Han Sans Neo'] underline leading-tight"
          >
            {isExpanded ? '숨기기' : '더보기'}
          </span>
        </div>
      </div>
    </div>
  )
}

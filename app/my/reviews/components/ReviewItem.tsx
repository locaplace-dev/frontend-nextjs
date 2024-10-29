'use client'

import { useCustomNavigate } from '@/app/navigator'
import Image from 'next/image'

export default function ReviewItem() {
  const navigator = useCustomNavigate()
  return (
    <div className="w-full px-3.5 py-4 bg-stone-50 rounded-xl border border-stone-300 flex-col justify-center items-start gap-3.5 inline-flex">
      <div className="self-stretch justify-between items-center inline-flex">
        <div className="justify-start items-center gap-3.5 flex">
          <div className="w-14 h-14 relative">
            <div className="w-14 h-14 left-0 top-0 absolute">
              <div className="w-14 h-14 left-0 top-0 absolute bg-neutral-50 rounded-full border border-gray-200" />
            </div>
            <div className="w-5 h-5 left-[39px] top-[34px] absolute">
              <div className="w-5 h-5 left-0 top-0 absolute bg-black rounded-full" />
              <div className="w-2 left-[6px] top-[2px] absolute text-center text-white text-xs font-bold font-['Montserrat']">
                3
              </div>
            </div>
          </div>
          <div className=" flex-col justify-start items-start gap-1.5 inline-flex">
            <div className="justify-start items-start gap-1.5 inline-flex">
              <div className="text-black text-sm font-bold ">이모아</div>
            </div>
            <div className=" h-4 text-neutral-400 text-xs  font-['Montserrat'] leading-tight">
              2024.10.10
            </div>
          </div>
        </div>
        <div
          className="w-14 h-14 relative"
          onClick={() => {
            // TODO
            navigator.push('/')
          }}
        >
          <div className="w-14 h-14 left-0 top-0 absolute bg-zinc-300 rounded-full" />
        </div>
      </div>
      <div className="self-stretch h-24 flex-col justify-start items-start gap-2.5 flex">
        <div className="self-stretch h-5 justify-between items-center inline-flex">
          <div className="self-stretch justify-start items-center gap-1.5 flex">
            <Image
              src={'/images/ic_review.svg'}
              alt="review"
              width={14}
              height={15}
            />
            <div className=" text-zinc-900 text-xs font-bold  leading-7">
              4.0 만족해요
            </div>
          </div>
          <div className="justify-start items-center gap-1 flex">
            <div className=" text-center text-zinc-900 text-xs   underline leading-7">
              수정
            </div>
            <div className="w-1 h-5 text-center text-zinc-900 text-xs   leading-7">
              ∙
            </div>
            <div className=" text-center text-zinc-900 text-xs   underline leading-7">
              삭제
            </div>
          </div>
        </div>
        <div className="self-stretch h-14">
          <span className="text-zinc-500 text-xs flex leading-tight text-wrap">
            한 번 더 방문하고 싶은 곳이었습니다. 지내는 동안 편안하게
            있었습니다. 주변 인프라도 좋았고, 맛집도 많았습니다. 난방 시설도
            좋았고 반려동물이랑 방문하기 너무 좋았어요. 기회가 된다면 다음에 ...{' '}
          </span>
          <span className="text-zinc-900 text-xs   underline leading-tight">
            더보기
          </span>
        </div>
      </div>
    </div>
  )
}

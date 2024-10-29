'use client'

import { useCustomNavigate } from '@/app/navigator'

export default function UserSummary() {
  const useNavigator = useCustomNavigate()
  return (
    <div
      onClick={() => {
        useNavigator.push('/web/guest/my/profile')
      }}
      className="cursor-pointer w-full h-28 pb-5 flex-col justify-start items-start gap-2.5 inline-flex"
    >
      <div className="w-full px-3.5 py-4 rounded-2xl border border-stone-300 justify-start items-center gap-3.5 inline-flex">
        <div className="grow shrink basis-0 h-14 justify-start items-center gap-3.5 flex">
          <div className="w-14 h-14 relative">
            <div className="w-14 h-14 left-0 top-0 absolute">
              <div className="w-14 h-14 left-0 top-0 absolute bg-neutral-50 rounded-full border border-gray-200" />
            </div>
            <div className="w-5 h-5 left-[39px] top-[34px] absolute">
              <div className="w-5 h-5 left-0 top-0 absolute bg-black rounded-full" />
              <div className="w-2 left-[6px] top-[2px] absolute text-center text-white text-xs font-bold font-['Montserrat']">
                2
              </div>
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
            <div className="justify-start items-center gap-1.5 inline-flex">
              <div className="justify-start items-center gap-1.5 flex">
                <div className="justify-start items-center gap-1.5 flex">
                  <div className="text-black text-base font-medium font-['Spoqa Han Sans Neo']">
                    홍수아
                  </div>
                </div>
                <div className="px-2 py-1 rounded-full border border-black justify-start items-center gap-1.5 flex">
                  <div className="text-black text-xs font-medium font-['Spoqa Han Sans Neo']">
                    게스트
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-4 text-neutral-400 text-xs font-normal font-['Montserrat'] leading-tight">
              sua@gmail.com
            </div>
          </div>
        </div>
        <div className="w-6 h-6 relative">
          <div className="w-6 h-6 left-0 top-0 absolute bg-white rounded-full shadow" />
        </div>
      </div>
    </div>
  )
}

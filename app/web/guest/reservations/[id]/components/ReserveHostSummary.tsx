import SubTitle from '../../../products/[id]/components/SubTitle'

export default function ReserveHostSummary() {
  return (
    <div className="flex flex-col">
      <SubTitle subtitle="호스트" />
      <div className="h-36 pb-5 flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="self-stretch h-32 px-3.5 py-4 rounded-xl border border-stone-300 flex-col justify-center items-start gap-3.5 flex">
          <div className="self-stretch justify-between items-center inline-flex">
            <div className="justify-start items-center gap-3 flex">
              <div className="w-16 h-16 relative">
                <div className="w-14 h-14 left-0 top-0 absolute">
                  <div className="w-14 h-14 left-0 top-0 absolute bg-neutral-50 rounded-full border border-gray-200" />
                </div>
                <div className="w-5 h-5 left-[45px] top-[40.20px] absolute">
                  <div className="w-5 h-5 left-0 top-0 absolute bg-black rounded-full" />
                  <div className="w-2 left-[6px] top-[2px] absolute text-center text-white text-xs font-bold font-['Montserrat']">
                    3
                  </div>
                </div>
              </div>
              <div className="justify-start items-center gap-2 flex">
                <div className="justify-start items-center gap-1.5 flex">
                  <div className="text-black text-sm font-medium font-['Spoqa Han Sans Neo']">
                    홍길동
                  </div>
                </div>
              </div>
            </div>
            <div className="px-2.5 py-1.5 rounded-full border border-teal-400 justify-center items-center flex">
              <div className="text-center text-teal-400 text-xs font-medium font-['Spoqa Han Sans Neo'] leading-none">
                1:1 채팅
              </div>
            </div>
          </div>
          <div className="text-black text-sm font-normal font-['Spoqa Han Sans Neo']">
            안녕하세요. 홍길동 호스트입니다.{' '}
          </div>
        </div>
      </div>
    </div>
  )
}

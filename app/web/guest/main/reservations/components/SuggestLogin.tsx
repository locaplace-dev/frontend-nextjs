import Image from 'next/image'

export default function Suggestion() {
  return (
    <div className="w-full h-full px-4 py-5 bg-neutral-50 flex-col justify-center items-center gap-6 inline-flex">
      <div className="flex-col justify-start items-center gap-2.5 flex">
        <div className="w-28 h-9 relative">
          <Image
            src={'/images/img_loca.svg'}
            alt="logo"
            width={110}
            height={36}
          />
          <div className="w-28 h-9 left-0 top-0 absolute" />
          <div className="w-28 h-5 left-[1px] top-[7px] absolute">
            <div className="w-4 h-2 left-[57px] top-[11px] absolute bg-teal-400" />
          </div>
        </div>
        <div className="w-80 text-center text-black text-sm font-normal font-['Spoqa Han Sans Neo'] leading-tight">
          아직 예약된 숙소가 없어요!
        </div>
      </div>
      <div className="w-80 px-5 py-4 bg-teal-400 rounded-xl justify-center items-center gap-2.5 inline-flex">
        <div className="text-white text-sm font-bold font-['Spoqa Han Sans Neo'] leading-snug">
          숙소 검색하기
        </div>
      </div>
    </div>
  )
}

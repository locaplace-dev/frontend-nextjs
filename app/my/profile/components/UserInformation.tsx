export default function UserInformation() {
  return (
    <div className="w-full  pb-5  flex-col justify-center items-center gap-2.5 inline-flex">
      <div className="w-20 h-16 relative">
        <div className="w-16 h-16 left-0 top-0 absolute">
          <div className="w-16 h-16 left-0 top-0 absolute bg-neutral-50 rounded-full border border-gray-200" />
        </div>
        <div className="w-6 h-6 left-[50px] top-[46px] absolute">
          <div className="w-6 h-6 left-0 top-0 absolute bg-black rounded-full" />
          <div className="w-2.5 left-[7.20px] top-[2.40px] absolute text-center text-white text-sm font-bold font-['Montserrat']">
            3
          </div>
        </div>
      </div>
      <div className="px-2 py-1 rounded-full border border-black justify-center items-center gap-2.5 inline-flex">
        <div className="text-center text-black text-xs font-normal font-['Spoqa Han Sans Neo']">
          이미지 변경
        </div>
      </div>
      <div className="self-stretch h-16 flex-col justify-start items-center gap-1.5 flex">
        <div className="self-stretch h-4 text-center text-black text-base font-bold font-['SpoqaHanSans']">
          홍수아
        </div>
        <div className="self-stretch h-4 text-center text-black text-xs font-normal font-['Montserrat'] leading-tight">
          sua@gmail.com
        </div>
        <div className="self-stretch h-4 text-center text-black text-xs font-normal font-['SpoqaHanSans'] underline">
          닉네임 변경
        </div>
      </div>
    </div>
  )
}

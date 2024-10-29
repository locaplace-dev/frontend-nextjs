export default function HostMessage() {
  return (
    <div>
      <div className="h-14 px-4 pt-5 pb-3 justify-start items-center gap-2.5 inline-flex">
        <div className=" text-base font-medium  leading-normal">
          호스트 메시지
        </div>
      </div>
      <div className="w-full h-14 px-4 flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="self-stretch justify-between items-center inline-flex">
          <div className="grow shrink basis-0 h-14 justify-start items-center gap-3 flex">
            <div className="w-16 h-16 relative">
              <div className="w-14 h-14 left-0 top-0 absolute bg-neutral-50 rounded-full border border-gray-200" />
              <div className="w-16 h-16 left-0 top-0 absolute">
                <div className="w-14 h-14 left-0 top-0 absolute">
                  <div className="w-14 h-14 left-0 top-0 absolute bg-neutral-50 rounded-full border border-gray-200" />
                </div>
                <div className="w-5 h-5 left-[45px] top-[40px] absolute">
                  <div className="w-5 h-5 left-0 top-0 absolute bg-black rounded-full" />
                  <div className="w-2 left-[6px] top-[2px] absolute text-center text-white text-xs font-bold font-['Montserrat']">
                    3
                  </div>
                </div>
              </div>
            </div>
            <div className="justify-start items-center gap-2 flex">
              <div className="justify-start items-center gap-1.5 flex">
                <div className=" text-sm font-medium ">홍길동</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full h-44 px-4 pt-3 pb-5 flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="self-stretch h-36 flex-col justify-start items-start gap-2.5 flex">
          <div className="w-full h-36 p-5 rounded-xl border border-stone-300 flex-col justify-start items-start gap-0.5 flex">
            <div className="self-stretch  text-sm font-normal  leading-tight">
              여행에 관련한 문의사항을 입력해주세요.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

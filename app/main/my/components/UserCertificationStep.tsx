export default function UserCertificationStep() {
  return (
    <div className="w-full h-56 flex-col justify-start items-start gap-5 inline-flex">
      <div className="w-full h-2.5 bg-neutral-50 shadow" />
      <div className="w-full h-44  flex-col justify-start items-start gap-2.5 flex">
        <div className="self-stretch h-44 px-4 py-5 bg-teal-400 rounded-xl flex-col justify-center items-center gap-2.5 flex">
          <div className="justify-start items-center gap-1.5 inline-flex">
            <div className="text-center text-white text-sm font-medium font-['Spoqa Han Sans Neo'] leading-snug">
              현재
            </div>
            <div className="w-9 h-9 relative">
              <div className="w-9 h-9 left-0 top-0 absolute bg-white rounded-full" />
              <div className="w-3.5 left-[10.80px] top-[3.60px] absolute text-center text-teal-400 text-xl font-bold font-['Montserrat']">
                2
              </div>
            </div>
            <div className="text-center text-white text-sm font-medium font-['Spoqa Han Sans Neo'] leading-snug">
              단계
            </div>
          </div>
          <div className="self-stretch justify-between items-start inline-flex">
            <div className="grow shrink basis-0 text-center text-white text-sm font-normal font-['Spoqa Han Sans Neo'] leading-tight">
              3단계까지 단계 인증을 완료하시면
              <br />
              선택의 기회가 더 넓어집니다!
            </div>
          </div>
          <div className="px-5 py-2 rounded-xl border border-white justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-sm font-normal font-['Spoqa Han Sans Neo'] leading-snug">
              단계 인증 완료하기
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-px bg-stone-300" />
    </div>
  )
}

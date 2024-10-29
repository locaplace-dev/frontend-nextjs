export function UsageAgreeSwitch() {
  return (
    <div className="h-14 p-4 rounded-xl border border-teal-400 justify-between items-center inline-flex">
      <div className="text-center">
        <span className="text-teal-400 text-sm font-normal font-['Spoqa Han Sans Neo'] underline leading-snug">
          이용약관
        </span>
        <span className="text-teal-400 text-sm font-normal font-['Spoqa Han Sans Neo'] leading-snug">
          에 동의합니다.(필수)
        </span>
      </div>
      <div className="w-6 h-6 relative">
        <div className="w-6 h-6 left-0 top-0 absolute opacity-30" />
        <div className="w-4 h-6 left-[3px] top-0 absolute"></div>
      </div>
    </div>
  )
}

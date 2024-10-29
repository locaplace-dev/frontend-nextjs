export function UsageFooter() {
  return (
    <div className="w-96 h-24 px-4 py-5 bg-neutral-50 flex-col justify-start items-start gap-0.5 inline-flex">
      <div className="w-80 justify-start items-center gap-2 inline-flex">
        <div className="w-80 text-zinc-500 text-xs font-normal font-['Spoqa Han Sans Neo'] leading-none">
          회사소개 | 서비스 이용약관 | 개인정보 처리방침
        </div>
      </div>
      <div className="w-80 justify-start items-center gap-2 inline-flex">
        <div className="w-80 text-zinc-500 text-xs font-normal font-['Spoqa Han Sans Neo'] leading-none">
          상호명 : 로카플레이스
        </div>
      </div>
      <div className="w-80 justify-start items-center gap-2 inline-flex">
        <div className="w-80 text-zinc-500 text-xs font-normal font-['Spoqa Han Sans Neo'] leading-none">
          대표번호 :{' '}
        </div>
      </div>
    </div>
  )
}

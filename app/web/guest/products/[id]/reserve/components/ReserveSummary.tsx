export default function ReserveSummary() {
  return (
    <div className="flex flex-col">
      <ChangeReserveOptions />
      <ChangeReserveOptions />
    </div>
  )
}

function ChangeReserveOptions() {
  return (
    <div className="h-8 pb-2.5 justify-between items-center inline-flex">
      <div className="text-black text-sm font-normal font-['Spoqa Han Sans Neo'] leading-tight">
        날짜
      </div>
      <div className="text-black text-sm font-normal font-['Spoqa Han Sans Neo'] leading-tight">
        10월 10일 - 11월 10일
      </div>
      <div className="text-black text-xs font-normal font-['Spoqa Han Sans Neo'] underline leading-none">
        수정
      </div>
    </div>
  )
}

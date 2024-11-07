interface ReserveSummaryProps {
  startDate: string | undefined
  endDate: string | undefined
}

export default function ReserveSummary({
  startDate,
  endDate,
}: ReserveSummaryProps) {
  return (
    <div className="flex flex-col">
      <ChangeReserveOptions label="날짜" value={`${startDate} - ${endDate}`} />
      <ChangeReserveOptions label="게스트" value="홍길동님" />
    </div>
  )
}

function ChangeReserveOptions({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="h-8 pb-2.5 justify-between items-center inline-flex">
      <div className="text-black text-sm font-normal font-['Spoqa Han Sans Neo'] leading-tight">
        {label}
      </div>
      <div className="text-black text-sm font-normal font-['Spoqa Han Sans Neo'] leading-tight">
        {value}
      </div>
      <div className="text-black text-xs font-normal font-['Spoqa Han Sans Neo'] underline leading-none">
        수정
      </div>
    </div>
  )
}

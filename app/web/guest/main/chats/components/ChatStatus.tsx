export default function ChatStatus({ status }: { status: number }) {
  const label =
    status == 1
      ? '이용문의'
      : status == 2
      ? '예약대기'
      : status == 3
      ? '예약확정'
      : status == 4
      ? '이용중'
      : status == 5
      ? '계약종료'
      : '계약취소'
  return (
    <div
      className={`px-2 py-1 rounded-full border 
    ${
      status == 1
        ? 'border-black'
        : [3, 4].includes(status)
        ? 'border-teal-400'
        : 'border-neutral-400'
    }
     justify-start items-center gap-1.5 flex`}
    >
      <div
        className={` text-xs ${
          status == 1
            ? 'text-black'
            : [3, 4].includes(status)
            ? 'text-teal-400'
            : 'text-neutral-400'
        } `}
      >
        {label}
      </div>
    </div>
  )
}

import { HTMLAttributes } from 'react'

interface ReservationTabProps {
  fetchReserves: (status: number) => void
  // 다른 props들
}

export default function ReservationTab({ fetchReserves }: ReservationTabProps) {
  // console.log(fetchReserves())
  return (
    <div className=" h-12 py-3 justify-start items-center gap-3.5 inline-flex">
      <TabItem
        label="현재 예약"
        selected={true}
        onClick={() => {
          fetchReserves(1)
        }}
      />
      <TabItem
        label="이전 예약"
        selected={false}
        onClick={() => {
          fetchReserves(2)
        }}
      />
      <TabItem
        label="취소 예약"
        selected={false}
        onClick={() => {
          fetchReserves(9)
        }}
      />
    </div>
  )
}

interface TabItemProps extends HTMLAttributes<HTMLDivElement> {
  label: string
  selected: boolean
}

function TabItem({ label, selected, onClick }: TabItemProps) {
  return (
    <div
      onClick={onClick}
      className="flex-col justify-center items-start gap-1 inline-flex"
    >
      <div
        className={`text-black text-xs ${
          selected ? 'font-medium' : 'font-normal'
        }  leading-none`}
      >
        {label}
      </div>
      {selected ? (
        <div className="w-11 h-px bg-black" />
      ) : (
        <div className="w-11 h-px bg-white" />
      )}
    </div>
  )
}

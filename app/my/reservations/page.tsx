import PageTitle from '@/app/ui/common/pageTitle'
import ReserveItem, { ReserveItemProps } from '@/app/ui/common/ReserveItem'

const initReserveItemState: Array<ReserveItemProps> = [
  {
    title: '역세권 숲속 공간',
    address: '서울시 강남구 도산대로',
    startDate: '2024.10.27',
    endDate: '2024.12.27',
    isChecked: true,
    step: 1,
  },
  {
    title: '역세권 숲속 공간',
    address: '서울시 강남구 도산대로',
    startDate: '2024.10.27',
    endDate: '2024.12.27',
    isChecked: false,
    step: 2,
  },
  {
    title: '역세권 숲속 공간',
    address: '서울시 강남구 도산대로',
    startDate: '2024.10.27',
    endDate: '2024.12.27',
    isChecked: false,
    step: 3,
  },
  {
    title: '역세권 숲속 공간',
    address: '서울시 강남구 도산대로',
    startDate: '2024.10.27',
    endDate: '2024.12.27',
    isChecked: false,
    step: 4,
  },
]

export default function MyReservations() {
  return (
    <div className="px-4">
      <PageTitle title="나의 예약 내역" />
      <div className="w-full flex inline-flex gap-3 flex-col">
        {initReserveItemState.map((item, idx) => (
          <ReserveItem {...item} />
        ))}
      </div>
    </div>
  )
}
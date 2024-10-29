import { BackAppbar } from '@/app/web/components/common/appbar'
import PageTitle from '@/app/web/components/common/pageTitle'
import ReserveDateItem from './components/ReserveDateItem'
import Divider from '@/app/web/components/common/Divider'
import ReserveHostSummary from './components/ReserveHostSummary'
import ReserveDetailInfo from './components/ReserveDetailInfo'
import ReserveActionButton from './components/ReserveActionButton'

export default function ReservationDetail() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col px-4">
        <BackAppbar />
        <PageTitle title="역세권 숲속" />
        <div className="w-full h-56 relative">
          <div className="w-full h-56 left-0 top-0 absolute bg-gray-200 rounded-2xl" />
        </div>
        <div className="flex inline-flex gap-2 py-4">
          <ReserveDateItem formattedDate="2024.10.27" label="계약 시작일" />
          <ReserveDateItem formattedDate="2024.10.27" label="계약 종료일" />
        </div>
      </div>
      <Divider />
      <div className="px-4">
        <ReserveHostSummary />
      </div>
      <Divider />
      <div className="px-4">
        <ReserveDetailInfo />
      </div>
      <Divider />
      <div className="px-4">
        <ReserveActionButton status={4} />
      </div>
    </div>
  )
}

import { BackAppbar } from '@/app/web/components/common/appbar'
import PageTitle from '@/app/web/components/common/pageTitle'
import ProductSummary from '../components/ProductSummary'
import ReserveSummary from '../reserve/components/ReserveSummary'
import Divider from '@/app/web/components/common/Divider'
import ChargeSummary from '../reserve/components/ChargeSummary'
import ContractSummary from './components/ContractSummary'
import { Button, BUTTON_TYPE } from '@/app/web/components/common/Button'

export default function ReserveComplete() {
  return (
    <div>
      <div className="px-4">
        <BackAppbar />
        <PageTitle title="예약완료" />
        <div className="w-full h-56 relative">
          <div className="w-full h-56 left-0 top-0 absolute bg-gray-200 rounded-2xl" />
        </div>
        <ProductSummary />
        <ReserveSummary />
      </div>
      <Divider />
      <div className="px-4">
        <ChargeSummary />
      </div>
      <Divider />
      <div className="px-4">
        <ContractSummary />
      </div>
      <Divider />
      <div className="w-full px-4 py-5 flex-col justify-start items-start gap-2.5 inline-flex">
        <Button buttonType={BUTTON_TYPE.inprogress} label="예약 신청중" />
        <Button buttonType={BUTTON_TYPE.secondary} label="예약신청 취소하기" />
      </div>
    </div>
  )
}

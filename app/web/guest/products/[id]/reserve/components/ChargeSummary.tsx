import RowTitleDetail from '@/app/web/components/common/RowTitleDetail'
import SubTitle from '../../components/SubTitle'
import { getCommaNumber } from '@/app/utils/utility'

interface ChargeSummaryProps {
  price: number
  stayDayCount: number
}

export default function ChargeSummary({
  price,
  stayDayCount,
}: ChargeSummaryProps) {
  const roomPrice = price * stayDayCount
  const vat = Math.floor(((price * stayDayCount + 100000) / 100) * 5.9)
  const totalPrice = roomPrice + vat + 100000
  return (
    <div className="flex flex-col px-4">
      <SubTitle subtitle="요금 정보" />
      <RowTitleDetail label="금액" value={getCommaNumber(roomPrice)} />
      <RowTitleDetail label="관리비" value="50,000" />
      <RowTitleDetail label="청소비" value="50,000" />
      <RowTitleDetail label="수수료(5.9%)" value={getCommaNumber(vat)} />
      <div className="w-full h-px bg-stone-300" />
      <div className="pt-2.5 pb-5 justify-between items-center inline-flex">
        <div className="w-24 text-black text-sm font-normal font-['Spoqa Han Sans Neo'] leading-tight">
          총 합계
        </div>
        <div className="w-56 text-right text-black text-sm font-medium font-['Montserrat'] leading-tight">
          ₩{getCommaNumber(totalPrice)}
        </div>
      </div>
    </div>
  )
}

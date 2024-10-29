import RowTitleDetail from '@/app/web/components/common/RowTitleDetail'
import SubTitle from '../../components/SubTitle'

export default function ChargeSummary() {
  return (
    <div className="flex flex-col px-4">
      <SubTitle subtitle="요금 정보" />
      <RowTitleDetail />
      <RowTitleDetail />
      <RowTitleDetail />
      <RowTitleDetail />
      <div className="w-full h-px bg-stone-300" />
      <div className="pt-2.5 pb-5 justify-between items-center inline-flex">
        <div className="w-24 text-black text-sm font-normal font-['Spoqa Han Sans Neo'] leading-tight">
          총 합계
        </div>
        <div className="w-56 text-right text-black text-sm font-medium font-['Montserrat'] leading-tight">
          ₩300,000
        </div>
      </div>
    </div>
  )
}

import RowTitleDetail from '@/app/web/components/common/RowTitleDetail'
import SubTitle from '../../components/SubTitle'

export default function ContractSummary({
  totalPrice,
  payMethod,
  isOver60Days,
}: {
  totalPrice: number
  payMethod: string
  isOver60Days: boolean
}) {
  return (
    <div className="flex flex-col">
      <SubTitle subtitle="계약정보" />
      <RowTitleDetail
        label="계약 기간"
        value={isOver60Days ? '60일 초과' : '60일 미만'}
        isNumber={false}
      />
      <RowTitleDetail label="결제 방법" value={payMethod} isNumber={false} />
      <RowTitleDetail label="금액" value={totalPrice.toString()} />
    </div>
  )
}

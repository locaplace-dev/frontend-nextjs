import RowTitleDetail from '@/app/web/components/common/RowTitleDetail'
import SubTitle from '../../components/SubTitle'

export default function ContractSummary() {
  return (
    <div className="flex flex-col">
      <SubTitle subtitle="계약정보" />
      <RowTitleDetail />
      <RowTitleDetail />
      <RowTitleDetail />
    </div>
  )
}

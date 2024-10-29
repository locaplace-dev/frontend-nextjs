import Image from 'next/image'
import SubTitle from '../../../products/[id]/components/SubTitle'

const initReserveDetail: ReserveDetailItemProps[] = [
  {
    title: '계약일',
    detail: '2024.10.27',
  },
  {
    title: '최초 입실일',
    detail: '2024.10.27',
  },
  {
    title: '결제일',
    detail: '2024.10.27',
  },
  {
    title: '계약 종료일',
    detail: '2024.10.27',
  },
  {
    title: '확인서',
    detail: '확인서.pdf',
    useAction: true,
  },
  {
    title: '계약서',
    detail: '계약서.pdf',
    useAction: true,
  },
]

export default function ReserveDetailInfo() {
  return (
    <div className="flex flex-col">
      <SubTitle subtitle="예약 상세정보" />
      <div className="flex inline-flex gap-2 flex-col">
        {initReserveDetail.map((elem, idx) => (
          <ReserveDetailItem key={`reserve-detail-item-${idx}`} {...elem} />
        ))}
      </div>
    </div>
  )
}

interface ReserveDetailItemProps {
  title: string
  detail: string
  useAction?: boolean
}

function ReserveDetailItem({
  title,
  detail,
  useAction,
}: ReserveDetailItemProps) {
  return (
    <div className="w-full h-5 items-center inline-flex">
      <div className="w-48 text-black text-sm font-normal font-['Spoqa Han Sans Neo'] leading-tight">
        {title}
      </div>
      <div className="h-5 flex-1 self-stretch justify-between items-center flex">
        <div className="text-black text-sm font-normal font-['Montserrat'] leading-tight">
          {detail}
        </div>
        <div className="w-5 h-5 relative">
          {useAction && (
            <Image
              src={'/images/ic_download.svg'}
              alt="download"
              width={22}
              height={22}
            />
          )}
        </div>
      </div>
    </div>
  )
}

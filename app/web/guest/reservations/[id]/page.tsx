'use client'

import { BackAppbar } from '@/app/web/components/common/appbar'
import PageTitle from '@/app/web/components/common/pageTitle'
import ReserveDateItem from './components/ReserveDateItem'
import Divider from '@/app/web/components/common/Divider'
import ReserveHostSummary from './components/ReserveHostSummary'
import ReserveDetailInfo from './components/ReserveDetailInfo'
import ReserveActionButton from './components/ReserveActionButton'
import { useEffect, useState } from 'react'
import { getContractById } from '@/app/apis/guest/contract'
import { useCustomNavigate } from '@/app/navigator'
import { useParams } from 'next/navigation'
import { IContract } from '@/app/apis/guest/icontract'
import moment from 'moment'

export default function ReservationDetail() {
  const [contract, setContract] = useState<IContract | null>(null)
  const route = useParams()
  const navigator = useCustomNavigate()

  const fetchReserves = async () => {
    const result = await getContractById(Number(route.id))
    setContract(result)
  }

  useEffect(() => {
    fetchReserves()
  }, [])

  return (
    <div className="flex flex-col">
      <div className="flex flex-col px-4">
        <BackAppbar />
        <PageTitle title="역세권 숲속" />
        <div className="w-full h-56 relative">
          <div className="w-full h-56 left-0 top-0 absolute bg-gray-200 rounded-2xl" />
        </div>
        <div className="flex inline-flex gap-2 py-4">
          <ReserveDateItem
            formattedDate={moment(contract?.startDate).format('YYYY.MM.DD')}
            label="계약 시작일"
          />
          <ReserveDateItem
            formattedDate={moment(contract?.endDate).format('YYYY.MM.DD')}
            label="계약 종료일"
          />
        </div>
      </div>
      <Divider />
      <div className="px-4">
        <ReserveHostSummary />
      </div>
      <Divider />
      <div className="px-4 pb-5">
        <ReserveDetailInfo
          contractDate={moment(contract?.contractDate).format('YYYY.MM.DD')}
          startDate={moment(contract?.startDate).format('YYYY.MM.DD')}
          endDate={moment(contract?.endDate).format('YYYY.MM.DD')}
        />
      </div>
      <Divider />
      <div className="px-4">
        <ReserveActionButton status={contract?.status ?? 0} />
      </div>
    </div>
  )
}

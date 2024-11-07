'use client'

import { getMyReserves, IReserve } from '@/app/apis/guest/contract'
import PageTitle from '@/app/web/components/common/pageTitle'
import ReserveItem, {
  ReserveItemProps,
} from '@/app/web/components/common/ReserveItem'
import moment from 'moment'
import { useEffect, useState } from 'react'

export default function MyReservations() {
  const [reserves, setReserves] = useState<IReserve[]>([])

  const fetchReserves = async () => {
    const response = await getMyReserves()
    setReserves(response)
  }

  useEffect(() => {
    fetchReserves()
  }, [])

  return (
    <div className="px-4">
      <PageTitle title="나의 예약 내역" />
      <div className="w-full flex inline-flex gap-3 flex-col">
        {reserves.map((item, idx) => (
          <ReserveItem
            key={`reserve-${idx}`}
            id={item.id}
            title={item.title}
            address={item.address}
            startDate={
              item.startDate && moment(item.startDate).format('YYYY.MM.DD')
            }
            endDate={item.endDate && moment(item.endDate).format('YYYY.MM.DD')}
            status={item.status}
          />
        ))}
      </div>
    </div>
  )
}

'use client'

import { useEffect, useState } from 'react'
import ReservationTab from './components/reservationTab'

import Suggestion from './components/SuggestLogin'
import ReserveItem, {
  ReserveItemProps,
} from '@/app/web/components/common/ReserveItem'
import {
  getCancelledContract,
  getPastContract,
  getProgressContract,
} from '@/app/apis/guest/contract'
import { IContract } from '@/app/apis/guest/icontract'

export default function Reservationpage() {
  const [reserves, setReserves] = useState<IContract[]>([])

  const fetchReserves = async (status: number) => {
    let result
    if (status == 1) {
      result = await getProgressContract()
    } else if (status == 2) {
      result = await getPastContract()
    } else {
      result = await getCancelledContract()
    }
    setReserves(result)
  }

  useEffect(() => {
    getProgressContract().then((val) => setReserves(val))
  }, [])

  return (
    <div className="flex-1 flex flex-col">
      <ReservationTab fetchReserves={fetchReserves} />
      <div className="flex-1 gap-3 flex flex-col overflow-scroll gap-2 flex-col flex">
        {reserves.length == 0 ? (
          <Suggestion />
        ) : (
          reserves.map((item, idx) => {
            return <ReserveItem key={`reserve-${idx}`} {...item} />
          })
        )}
      </div>
    </div>
  )
}

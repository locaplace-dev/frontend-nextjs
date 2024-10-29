'use client'

import { useState } from 'react'
import ReservationTab from './components/reservationTab'

import Suggestion from './components/SuggestLogin'
import ReserveItem, {
  ReserveItemProps,
} from '@/app/web/components/common/ReserveItem'

const initReserveItemState = [
  {
    id: 1,
    title: '역세권 숲속 공간',
    address: '서울시 강남구 도산대로',
    startDate: '2024.10.27',
    endDate: '2024.12.27',
    isChecked: true,
  },
  {
    id: 2,
    title: '역세권 숲속 공간',
    address: '서울시 강남구 도산대로',
    startDate: '2024.10.27',
    endDate: '2024.12.27',
    isChecked: false,
  },
]

export default function Reservationpage() {
  const [reserves, setReserves] =
    useState<ReserveItemProps[]>(initReserveItemState)

  const fetchReserves = (status: number) => {
    if (status == 1) {
      setReserves(initReserveItemState)
    } else if (status == 2) {
      setReserves([initReserveItemState[0]])
    } else {
      setReserves([])
    }
  }

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

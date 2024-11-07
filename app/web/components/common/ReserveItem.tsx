import { IContract } from '@/app/apis/guest/icontract'
import { useCustomNavigate } from '@/app/navigator'
import ChatStatus from '@/app/web/guest/main/chats/components/ChatStatus'
import moment from 'moment'

export interface ReserveItemProps {
  id: number | undefined
  title: string | undefined
  address: string | undefined
  startDate: string | undefined
  endDate: string | undefined
  status?: number
  needCheck?: boolean
}

export default function ReserveItem({
  title,
  address,
  id,
  startDate,
  endDate,
  status,
  needCheck,
}: ReserveItemProps) {
  const navigator = useCustomNavigate()

  return (
    <div
      onClick={() => {
        navigator.push(`/web/guest/reservations/${id}`)
      }}
      className="cursor-pointer shadow h-24 px-3 py-4 bg-neutral-50 rounded-xl flex-col justify-center items-start gap-1.5 flex"
    >
      <div className="self-stretch justify-center items-start gap-3 inline-flex">
        <div className="w-16 h-16 relative">
          <div className="w-16 h-16 left-0 top-0 absolute bg-zinc-300 rounded-full" />
        </div>
        <div className="grow shrink basis-0 flex-col justify-between items-start gap-1.5 inline-flex">
          <div className="justify-start items-start gap-0.5 inline-flex">
            <div className="text-black text-sm font-medium leading-tight">
              {title}
            </div>
            {needCheck && (
              <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
            )}
          </div>

          <div className="self-stretch h-9 flex-col justify-between items-start flex">
            <div className="self-stretch h-4 text-zinc-500 text-xs font-normal leading-none">
              {address}
            </div>
            {startDate && endDate && (
              <div className="self-stretch h-4 text-zinc-500 text-xs font-normal font-['Montserrat'] leading-none">
                {moment(startDate).format('YYYY.MM.DD')} -{' '}
                {moment(endDate).format('YYYY.MM.DD')}
              </div>
            )}
          </div>
        </div>
        <ChatStatus status={status ?? 1} />
      </div>
    </div>
  )
}

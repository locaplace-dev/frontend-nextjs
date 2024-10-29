import ChatStatus from '@/app/main/chats/components/ChatStatus'

export interface ReserveItemProps {
  title: string
  address: string
  startDate: string
  endDate: string
  isChecked: boolean
  step?: number
}

export default function ReserveItem({
  title,
  address,
  startDate,
  endDate,
  isChecked,
  step,
}: ReserveItemProps) {
  return (
    <div className="shadow h-24 px-3 py-4 bg-neutral-50 rounded-xl flex-col justify-center items-start gap-1.5 flex">
      <div className="self-stretch justify-center items-start gap-3 inline-flex">
        <div className="w-16 h-16 relative">
          <div className="w-16 h-16 left-0 top-0 absolute bg-zinc-300 rounded-full" />
        </div>
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-1.5 inline-flex">
          <div className="justify-start items-start gap-0.5 inline-flex">
            <div className="text-black text-sm font-medium leading-tight">
              {title}
            </div>
            {isChecked && (
              <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
            )}
          </div>

          <div className="self-stretch h-9 flex-col justify-start items-start flex">
            <div className="self-stretch h-4 text-zinc-500 text-xs font-normal leading-none">
              {address}
            </div>
            <div className="self-stretch h-4 text-zinc-500 text-xs font-normal font-['Montserrat'] leading-none">
              {startDate} - {endDate}
            </div>
          </div>
        </div>
        <ChatStatus status={step ?? 1} />
      </div>
    </div>
  )
}

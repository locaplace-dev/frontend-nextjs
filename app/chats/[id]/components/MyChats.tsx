import { ChatsItemProps } from './ChatRoom'

export default function MyChats({
  text,
  isContinued,
  timestamp,
}: ChatsItemProps) {
  return (
    <div className="mb-1 flex-col justify-start items-end gap-1.5 inline-flex">
      <div className="flex gap-1.5 flex-col">
        <div className="p-3 bg-teal-400 rounded-xl flex-col justify-start items-start flex">
          <div className="self-stretch text-white text-xs font-normal font-['Spoqa Han Sans Neo'] leading-none">
            {text}
          </div>
        </div>
        {isContinued && (
          <div className=" h-4 text-neutral-400 text-xs font-normal font-['Montserrat'] leading-none">
            {timestamp.toDate().toISOString().substring(0, 10)}{' '}
          </div>
        )}
      </div>
    </div>
  )
}

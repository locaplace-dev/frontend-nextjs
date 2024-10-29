import { ChatsItemProps } from './ChatRoom'

export default function OpChats({
  text,
  fileURL,
  isContinued,
  timestamp,
}: ChatsItemProps) {
  return (
    <div className="justify-start items-start gap-3 inline-flex">
      <div className="w-16 h-16 relative">
        {!isContinued && (
          <div className="w-16 h-16 left-0 top-0 absolute bg-neutral-50 rounded-full border border-gray-200" />
        )}
      </div>
      <div className="basis-0 flex-col justify-start items-end gap-1.5 inline-flex">
        <div className="p-3 bg-zinc-100 rounded-xl flex-col justify-start items-start flex">
          <div className="text-black text-xs font-normal font-['Spoqa Han Sans Neo'] leading-none">
            {text}
          </div>
        </div>
        {!isContinued && (
          <div className="h-4 text-right text-neutral-400 text-xs font-normal font-['Montserrat'] leading-none">
            {timestamp?.toDate()?.toISOString()?.substring(0, 10)}{' '}
          </div>
        )}
      </div>
    </div>
  )
}

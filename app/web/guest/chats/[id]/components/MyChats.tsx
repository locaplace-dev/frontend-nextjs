import Image from 'next/image'
import { ChatsItemProps } from './ChatRoom'

export default function MyChats({
  text,
  isContinued,
  timestamp,
  fileURL,
}: ChatsItemProps) {
  return (
    <div className="mb-1 flex-col justify-start items-end gap-1.5 inline-flex">
      <div className="flex gap-1.5 flex-col">
        <div className="p-3 bg-teal-400 rounded-xl flex-col justify-start items-start flex">
          {fileURL ? (
            <Image
              src={fileURL}
              alt={'chat-' + timestamp}
              width={200}
              height={200}
            />
          ) : (
            <div className="self-stretch text-white text-xs font-normal font-['Spoqa Han Sans Neo'] leading-none">
              {text}
            </div>
          )}
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

'use client'

import { sendMessage, uploadFileAndSendMessage } from '@/app/apis/firebase'
import Image from 'next/image'
import { useRef, useState } from 'react'

export default function ChatWriter({
  roomId,
  myId,
}: {
  roomId: number
  myId: number
}) {
  const [input, setInput] = useState('')

  const fileRef = useRef<HTMLInputElement>(null)
  // input click method
  const handleClick = () => {
    fileRef?.current?.click()
  }

  const handleSend = async () => {
    if (input.trim() !== '') {
      await sendMessage({ roomId, senderId: myId, text: input, fileUrl: null })
      setInput('')
    }
  }

  const handleFileChange = async (file: File) => {
    await uploadFileAndSendMessage({
      roomId,
      senderId: myId,
      file: file,
      text: '',
    })
  }

  return (
    <div className=" w-full h-16 px-10 py-2.5 bg-white shadow justify-between items-center inline-flex">
      <div className="w-full h-12 px-4 py-3 bg-stone-50 rounded-xl border border-stone-300 justify-between items-center flex">
        <input
          type="text"
          // value={value}
          // onChange={handleChange}
          onChange={(e) => setInput(e.target.value)}
          value={input}
          placeholder={`메시지 입력`}
          className="w-full text-neutral-500 bg-stone-50  text-sm font-['Pretendard'] leading-tight "
          style={{
            outline: 'none',
          }}
        />

        <input
          hidden={true}
          type="file"
          ref={fileRef}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            if (
              event !== null &&
              event.target !== null &&
              event.target.files != null &&
              event.target.files.length > 0
            ) {
              handleFileChange(event?.target?.files[0])
            }

            // setFile(e.target.files[0])
            // handleSend()
          }}
        />
        <div className="justify-end items-center gap-3 flex">
          <Image
            className="pointer-curosr"
            src={'/images/ic_attach.svg'}
            onClick={handleClick}
            alt="attach"
            width={26}
            height={26}
          />
          <Image
            className="pointer-curosr"
            onClick={handleSend}
            src={'/images/ic_send.svg'}
            alt="attach"
            width={26}
            height={26}
          />
        </div>
      </div>
    </div>
  )
}

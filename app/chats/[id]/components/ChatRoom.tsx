'use client'

import React, { useState, useEffect } from 'react'
import { db } from '../../../../firebaseConfig'
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  Timestamp,
  DocumentData,
} from 'firebase/firestore'
import OpChats from './OpChats'
import MyChats from './MyChats'

export interface ChatsItemProps {
  text: string
  isContinued: boolean
  fileURL: string | null
  timestamp: Timestamp
}

function ChatRoom({ roomId, myId }: { roomId: number; myId: number }) {
  const [messages, setMessages] = useState<DocumentData[]>([])

  useEffect(() => {
    const q = query(
      collection(db, `ChatRooms/${roomId}/Messages`),
      orderBy('timestamp')
    )
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setMessages(querySnapshot.docs.map((doc) => doc.data()))
    })
    return () => unsubscribe()
  }, [roomId])

  return (
    <div className="w-full py-3">
      <div className="w-full flex flex-col">
        {messages.map((msg, index) => {
          console.log(msg)
          if (msg.senderId == myId) {
            return (
              <MyChats
                key={`my-${index}`}
                text={msg.text}
                fileURL={msg.fileUrl}
                timestamp={msg.timestamp}
                isContinued={
                  index != 0 &&
                  messages[index - 1].senderId == myId &&
                  index != messages.length - 1 &&
                  messages[index + 1].senderId != myId
                }
              />
            )
          } else {
            return (
              <OpChats
                key={`op-${index}`}
                timestamp={msg.timestamp}
                text={msg.text}
                fileURL={msg.fileUrl}
                isContinued={
                  index != 0 &&
                  messages[index - 1]?.senderId != myId &&
                  //   index != messages.length &&
                  index != messages.length - 1 &&
                  messages[index + 1]?.senderId == myId
                }
              />
            )
          }
        })}
      </div>
    </div>
  )
}

export default ChatRoom

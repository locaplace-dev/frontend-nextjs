import { db, storage } from '../../firebaseConfig'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'

interface sendMessageProps {
  roomId: number
  senderId: number
  text: string
  fileUrl: string | null
}

export async function sendMessage({
  roomId,
  senderId,
  text,
  fileUrl = null,
}: sendMessageProps) {
  try {
    const messageData = {
      senderId,
      text,
      fileUrl,
      timestamp: serverTimestamp(),
    }
    await addDoc(collection(db, `ChatRooms/${roomId}/Messages`), messageData)
  } catch (error) {
    console.error('Error sending message: ', error)
  }
}

interface uploadFileAndSendMessageProps {
  roomId: number
  senderId: number
  file: File
  text: string
}
export async function uploadFileAndSendMessage({
  roomId,
  senderId,
  file,
  text,
}: uploadFileAndSendMessageProps) {
  const storageRef = ref(storage, `chatFiles/${roomId}/${file.name}`)
  try {
    const snapshot = await uploadBytes(storageRef, file)
    const fileUrl = await getDownloadURL(snapshot.ref)
    await sendMessage({ roomId, senderId, text, fileUrl }) // 텍스트가 없으므로 ""로 설정
  } catch (error) {
    console.error('Error uploading file: ', error)
  }
}

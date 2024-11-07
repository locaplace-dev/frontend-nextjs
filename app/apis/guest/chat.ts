import { basicGet } from '../base'

export const getChatList = async () => {
  const response = await basicGet(`chats/guest`)
  return response
}

export interface IChatInfo {
  chatId: number
  productTitle: string
  address: string
  startDate: any
  endDate: any
  hostProfileImage: any
  guestProfileImage: any
  status: number
  isUpdate: boolean
}

export const getChatInfo = async (chatId: number) => {
  const response = await basicGet(`chats/${chatId}`)
  return response
}

export type ChatListRes = IChatListItem[]

export interface IChatListItem {
  chatId: number
  hostProfileImage: any
  hostName: string
  lastContent: any
  startDate?: string
  endDate?: string
  chatStatusIdx: number
  productImage: string
  isNewContentExist: boolean
}

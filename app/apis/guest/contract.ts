import { basicGet, basicPost } from '../base'
import { IContract } from './icontract'

export interface IApplyContract {
  startDate: string
  endDate: string
  isRegular: boolean
  regularPayDate: number | null
  paymentMethod: number
  inquiry: string
  productId: number
}

export const applyContract = async (value: IApplyContract) => {
  console.log(`getProduct idx=${value.productId}`)

  const body = await basicPost(`contracts/${value.productId}`, value)
  return body
}

export enum ContractStatus {
  '',
  '이용문의',
  '승인대기',
  '승인확정',
  '이용중',
  '계약종료',
  '계약취소',
}

export const changeContractStatus = async ({
  id,
  contractStatusId,
}: {
  id: string
  contractStatusId: number
}) => {
  console.log(`contact idx=${id}`)

  const body = await basicPost(`contracts/${id}/status`, {
    contractStatusId: contractStatusId,
  })
  return body
}

export const getContractById = async (id: number) => {
  const response = await basicGet(`contracts/${id}`)
  return response as IContract
}

export const getProgressContract = async () => {
  const response = await basicGet(`contracts/progress`)
  return response
}
export const getPastContract = async () => {
  const response = await basicGet(`contracts/past`)
  return response
}
export const getCancelledContract = async () => {
  const response = await basicGet(`contracts/cancelled`)
  return response
}

export type IGetMyReserves = IReserve[]

export interface IReserve {
  id: number
  productThumbnail: string
  title: string
  address: string
  startDate?: string
  endDate?: string
  status: number
}

export const getMyReserves = async () => {
  const response = await basicGet(`contracts/guest`)
  return response
}

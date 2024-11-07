'use client'

import { BackAppbar } from '@/app/web/components/common/appbar'
import PageTitle from '@/app/web/components/common/pageTitle'
import ProductSummary from '../components/ProductSummary'
import ReserveSummary from '../reserve/components/ReserveSummary'
import Divider from '@/app/web/components/common/Divider'
import ChargeSummary from '../reserve/components/ChargeSummary'
import ContractSummary from './components/ContractSummary'
import { Button, BUTTON_TYPE } from '@/app/web/components/common/Button'
import { useParams, useSearchParams } from 'next/navigation'
import {
  changeContractStatus,
  ContractStatus,
  getContractById,
} from '@/app/apis/guest/contract'
import { useEffect, useState } from 'react'
import { IContract } from '@/app/apis/guest/icontract'

export default function ReserveComplete() {
  const [contract, setContract] = useState<IContract | null>(null)
  const param = useParams()
  const query = useSearchParams()

  useEffect(() => {
    getProductInfo()
  }, [])

  const getProductInfo = async () => {
    const body = await getContractById(Number(query.get('contract')))
    setContract(body)
  }

  const cancelContract = async () => {
    console.log(ContractStatus.계약취소)
    if (query.get('contract')) {
      const result = await changeContractStatus({
        id: query.get('contract')!,
        contractStatusId: ContractStatus.계약취소,
      })
    }
  }

  return (
    <div>
      <div className="px-4">
        <BackAppbar />
        <PageTitle title="예약완료" />
        <div className="w-full h-56 relative">
          <div className="w-full h-56 left-0 top-0 absolute bg-gray-200 rounded-2xl" />
        </div>
        <ProductSummary />
        <ReserveSummary
          startDate={contract?.startDate}
          endDate={contract?.endDate}
        />
      </div>
      <Divider />
      {/* <div className="px-4"> */}
      {contract?.product.price && contract?.dayCount && (
        <ChargeSummary
          price={contract?.product.price}
          stayDayCount={contract?.dayCount}
        />
      )}
      {/* </div> */}
      <Divider />
      <div className="px-4">
        {contract?.product.price && contract?.dayCount && (
          <ContractSummary
            totalPrice={contract?.product.price * contract?.dayCount}
            payMethod={
              contract.isRegular
                ? `정기결제/매달${contract.regularPayDate}일`
                : '일시불'
            }
            isOver60Days={contract.dayCount > 60}
          />
        )}
      </div>
      <Divider />
      <div className="w-full px-4 py-5 flex-col justify-start items-start gap-2.5 inline-flex">
        <Button buttonType={BUTTON_TYPE.inprogress} label="예약 신청중" />
        <Button
          buttonType={BUTTON_TYPE.secondary}
          label="예약신청 취소하기"
          onClick={() => {
            cancelContract()
          }}
        />
      </div>
    </div>
  )
}

'use client'

import { BackAppbar } from '@/app/web/components/common/appbar'
import PageTitle from '@/app/web/components/common/pageTitle'
import SubTitle from '../components/SubTitle'
import ReserveSummary from './components/ReserveSummary'
import ChargeSummary from './components/ChargeSummary'
import Divider from '@/app/web/components/common/Divider'
import SelectPaymentMethods from './components/PaymentMethods'
import { Button, BUTTON_TYPE } from '@/app/web/components/common/Button'
import RegularPay from './components/RegularPay'
import HostMessage from './components/HostMessage'
import ProductRefundRules from '../components/ProductRefundRules'
import { useCustomNavigate } from '@/app/navigator'
import { useParams, useSearchParams } from 'next/navigation'
import { decodeBase64String } from '@/app/utils/base64Query'
import { useEffect, useState } from 'react'
import { Products } from '@/app/apis/guest/type'
import { getproductsDetails } from '@/app/apis/guest/products'
import moment from 'moment'
import { getDateDiff, getNumberFromString } from '@/app/utils/utility'
import { applyContract } from '@/app/apis/guest/contract'

export default function ProductReserve() {
  const [product, setProduct] = useState<Products | null>(null)
  const [isRegularPay, setIsRegularPay] = useState<boolean>(false)
  const [regularPayDate, setRegularPayDate] = useState<string | null>(null)
  const [inquiry, setInquiry] = useState<string>('')
  const useNavigator = useCustomNavigate()
  const param = useParams()
  const query = useSearchParams()
  const base64String = query.get('data')
  const data = decodeBase64String(base64String) as {
    startDate: string
    endDate: string
  }
  const startDate = Date.parse(data.startDate)
  const endDate = Date.parse(data.endDate)
  const dayCount = getDateDiff(endDate, startDate)
  useEffect(() => {
    getProductInfo()
  }, [])

  const getProductInfo = async () => {
    const body = await getproductsDetails(Number(param.id))
    setProduct(body)
  }

  const toggleRegularPay = () => {
    if (isRegularPay) {
      setRegularPayDate(null)
    }
    setIsRegularPay(!isRegularPay)
  }

  const onSubmit = async () => {
    const result = await applyContract({
      productId: Number(param.id),
      startDate: moment(startDate).format('YYYY-MM-DD'),
      endDate: moment(endDate).format('YYYY-MM-DD'),
      isRegular: isRegularPay,
      regularPayDate: getNumberFromString(regularPayDate ?? ''),
      paymentMethod: 1,
      inquiry: inquiry,
    })
    return result
  }

  return (
    <div className="flex flex-col">
      <div className="w-full px-4">
        <BackAppbar />
        <PageTitle title="예약하기" />
      </div>
      <div className="border border-stone-300 flex flex-col px-4">
        <SubTitle subtitle="예약 정보" />
        <ReserveSummary
          startDate={moment(startDate).format('MM월 DD일')}
          endDate={moment(endDate).format('MM월 DD일')}
        />
      </div>
      <div className="border border-stone-300 ">
        {product?.price && (
          <ChargeSummary price={product!.price} stayDayCount={dayCount} />
        )}
      </div>
      <Divider />
      <SelectPaymentMethods />
      <Divider />
      <div className="h-24 px-4 py-5 flex-col justify-start items-start gap-2.5 inline-flex">
        <Button buttonType={BUTTON_TYPE.primary} label="예약하기" />
      </div>
      <RegularPay
        regularPayDate={regularPayDate}
        setRegularPayDate={setRegularPayDate}
        isRegularPay={isRegularPay}
        setIsRegularPay={toggleRegularPay}
      />
      <HostMessage
        inquiry={inquiry}
        setInquiry={setInquiry}
        host={product?.host}
      />
      <div className="px-4">
        <ProductRefundRules />
      </div>
      <Divider />
      <div className="h-24 px-4 py-5 flex-col justify-start items-start gap-2.5 inline-flex">
        <Button
          buttonType={BUTTON_TYPE.primary}
          label="예약하기"
          onClick={async () => {
            const contractId = await onSubmit()
            // useNavigator.back()
            useNavigator.replace(
              `/web/guest/products/${param.id}/reserve-complete?contract=${contractId}`
            )
          }}
        />
      </div>
    </div>
  )
}

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
import { useParams } from 'next/navigation'

export default function ProductReserve() {
  const useNavigator = useCustomNavigate()
  const param = useParams()
  return (
    <div className="flex flex-col">
      <div className="w-full px-4">
        <BackAppbar />
        <PageTitle title="예약하기" />
      </div>
      <div className="border border-stone-300 flex flex-col px-4">
        <SubTitle subtitle="예약 정보" />
        <ReserveSummary />
      </div>
      <div className="border border-stone-300 ">
        <ChargeSummary />
      </div>
      <Divider />
      <SelectPaymentMethods />
      <Divider />
      <div className="h-24 px-4 py-5 flex-col justify-start items-start gap-2.5 inline-flex">
        <Button buttonType={BUTTON_TYPE.primary} label="예약하기" />
      </div>
      <RegularPay />
      <HostMessage />
      <div className="px-4">
        <ProductRefundRules />
      </div>
      <Divider />
      <div className="h-24 px-4 py-5 flex-col justify-start items-start gap-2.5 inline-flex">
        <Button
          buttonType={BUTTON_TYPE.primary}
          label="예약하기"
          onClick={() => {
            useNavigator.push(
              `/web/guest/products/${param.id}/reserve-complete`
            )
          }}
        />
      </div>
    </div>
  )
}

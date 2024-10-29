'use client'

import { BackAppbar } from '@/app/ui/common/appbar'
import ProductSummary from './components/ProductSummary'
import ProductOptions from './components/ProductOptions'
import ProductComment from './components/ProductCommnet'
import ProductUsage from './components/ProductUsage'
import ProductHostInfo from './components/ProductHostInfo'
import ProductLocation from './components/ProductLocation'
import ProductAddons from './components/ProductAddons'
import ProductReviews from './components/ProductReviews'
import ProductCalendar from './components/ProductCalendar'
import ProductGuests from './components/ProductGuests'
import ProductRefundRules from './components/ProductRefundRules'
import { Button, BUTTON_TYPE } from '@/app/ui/common/Button'
import { CustomLink, useCustomNavigate } from '@/app/navigator'
import { useParams, usePathname } from 'next/navigation'

export default function ProductDetailPage() {
  const route = useParams()
  const navigator = useCustomNavigate()
  return (
    <div>
      <div className="relative">
        <div className="absolute top-0 px-4">
          <BackAppbar isWhite={true} />
        </div>
        <div className="w-full h-60 bg-gradient-to-b from-black to-black" />
      </div>
      <div className="px-4">
        <ProductSummary />
        <ProductOptions />
        <ProductComment />
        <ProductUsage />
        <ProductHostInfo />
        <ProductLocation />
        <ProductAddons />
        <ProductReviews />
        <ProductCalendar />
        <ProductGuests />
        <ProductRefundRules />

        <Button
          onClick={() => {
            navigator.push(`/products/${route.id}/reserve`)
          }}
          buttonType={BUTTON_TYPE.primary}
          label="예약하기"
        />
      </div>
    </div>
  )
}

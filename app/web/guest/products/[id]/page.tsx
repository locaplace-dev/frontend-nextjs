'use client'

import { BackAppbar } from '@/app/web/components/common/appbar'
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
import { Button, BUTTON_TYPE } from '@/app/web/components/common/Button'
import { CustomLink, useCustomNavigate } from '@/app/navigator'
import { useParams, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Products } from '@/app/apis/guest/type'
import { getproductsDetails } from '@/app/apis/guest/products'

export default function ProductDetailPage() {
  const route = useParams()
  const navigator = useCustomNavigate()

  const [product, setProduct] = useState<Products | null>(null)

  useEffect(() => {
    getProductInfo()
  }, [])

  const getProductInfo = async () => {
    const body = await getproductsDetails(Number(route.id))
    setProduct(body)
    console.log(body)
  }

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
        <ProductOptions details={product?.productsDetails} />
        <ProductComment
          comment={product?.productsDetails?.introductionSpace ?? ''}
        />
        <ProductUsage usage={product?.productsDetails?.introductionUse ?? ''} />
        <ProductHostInfo host={product?.host} />
        <ProductLocation />
        <ProductAddons />
        <ProductReviews />
        <ProductCalendar />
        <ProductGuests />
        <ProductRefundRules />

        <Button
          onClick={() => {
            navigator.push(`/web/guest/products/${route.id}/reserve`)
          }}
          buttonType={BUTTON_TYPE.primary}
          label="예약하기"
        />
      </div>
    </div>
  )
}

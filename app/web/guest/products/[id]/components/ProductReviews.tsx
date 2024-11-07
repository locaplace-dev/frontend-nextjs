'use client'

import { Button, BUTTON_TYPE } from '@/app/web/components/common/Button'
import SubTitle from './SubTitle'

import { useCustomNavigate } from '@/app/navigator'
import { useParams } from 'next/navigation'
import ReviewItem from '../../../my/reviews/components/ReviewItem'

export default function ProductReviews() {
  const useNavigator = useCustomNavigate()
  const params = useParams()
  return (
    <div className="flex-col justify-start items-start inline-flex w-full">
      <SubTitle subtitle="리뷰" />
      <div className="justify-start items-center gap-3 inline-flex whitespace-nowrap overflow-x-auto flex">
        <div className="w-72">
          <ReviewItem />
        </div>
        <div className="w-72">
          <ReviewItem />
        </div>
      </div>
      <div className="py-5 w-full">
        <Button
          onClick={() => {
            useNavigator.push(`/web/guest/products/${params.id}/reviews`)
          }}
          buttonType={BUTTON_TYPE.secondary}
          label="리뷰 더보기"
        />
      </div>
    </div>
  )
}

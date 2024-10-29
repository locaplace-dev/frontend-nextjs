import { Button, BUTTON_TYPE } from '@/app/ui/common/Button'
import SubTitle from './SubTitle'
import ReviewItem from '@/app/my/reviews/components/ReviewItem'

export default function ProductReviews() {
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
        <Button buttonType={BUTTON_TYPE.secondary} label="리뷰 더보기" />
      </div>
    </div>
  )
}

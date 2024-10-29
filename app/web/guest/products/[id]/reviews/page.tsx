import { BackAppbar } from '@/app/web/components/common/appbar'
import PageTitle from '@/app/web/components/common/pageTitle'
import ReviewItem from '../../../my/reviews/components/ReviewItem'

const iniReviews = [{}, {}]

export default function ProductReviewDetail() {
  return (
    <div className="px-4">
      <BackAppbar />
      <PageTitle title="리뷰" />
      <div className="flex flex-col gap-3">
        {iniReviews.map((elem, idx) => (
          <ReviewItem key={`product-review-${idx}`} />
        ))}
      </div>
    </div>
  )
}

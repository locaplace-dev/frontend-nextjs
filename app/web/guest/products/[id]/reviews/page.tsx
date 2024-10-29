import ReviewItem from '@/app/my/reviews/components/ReviewItem'
import { BackAppbar } from '@/app/web/components/common/appbar'
import PageTitle from '@/app/web/components/common/pageTitle'

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

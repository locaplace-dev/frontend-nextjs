import PageTitle from '@/app/web/components/common/pageTitle'
import ReviewItem from './components/ReviewItem'

const initReviews = [{}, {}]

export default function MyReviews() {
  return (
    <div className="px-4">
      <PageTitle title="나의 리뷰 내역" />
      <div className="flex inline-flex gap-3 flex-col">
        {initReviews.map((item, idx) => (
          <ReviewItem {...item} />
        ))}
      </div>
    </div>
  )
}

import PageTitle from '@/app/web/components/common/pageTitle'
import { ProductItem } from '@/app/web/components/common/ProductItem'

export default function MyWishList() {
  return (
    <div className="px-4 w-full">
      <PageTitle title="나의 좋아요 내역" />
      <div className="flex inline-flex gap-3 flex-col w-full">
        <ProductItem
          isLiked={false}
          title="asdf"
          nearbyStation="신림역"
          address="서울시 강남구 논현동"
          houseType="원룸"
          roomCount={2}
          hasParking={false}
          isPetAvailable={true}
          elevatorCount={2}
          price={20000}
          id={1}
        />
        <ProductItem
          isLiked={false}
          title="asdf"
          nearbyStation="신림역"
          address="서울시 강남구 논현동"
          houseType="원룸"
          roomCount={2}
          hasParking={false}
          isPetAvailable={true}
          elevatorCount={2}
          price={20000}
          id={2}
        />
      </div>
    </div>
  )
}

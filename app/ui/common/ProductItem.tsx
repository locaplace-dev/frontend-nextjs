import Image from 'next/image'
import Link from 'next/link'

interface ProductItemProps {
  id: number
  isLiked: Boolean
  title: string
  address: string
  houseType: string
  roomCount: number
  hasParking: boolean
  isPetAvailable: boolean
  elevatorCount: number
  nearbyStation: string
  price: number
}

export function ProductItem({
  isLiked,
  id,
  title,
  nearbyStation,
  address,
  houseType,
  roomCount,
  hasParking,
  isPetAvailable,
  elevatorCount,
  price,
}: ProductItemProps) {
  return (
    <Link href={`/products/${id}`}>
      <div className="w-full  flex-col justify-start items-start inline-flex">
        <div className="w-full h-56 relative">
          <div className="w-full h-56 bg-gray-200 rounded-tl-lg rounded-tr-lg" />
          <div className="h-6 px-3 py-1 absolute left-[16px] top-[179px]  opacity-90 bg-green-600 rounded-full justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-xs  leading-none">
              {nearbyStation}
            </div>
          </div>
        </div>
        <div className="self-stretch h-32 px-4 pt-3 pb-4 bg-neutral-50 rounded-bl-lg rounded-br-lg flex-col justify-center items-start gap-1.5 flex">
          <div className="w-full justify-between items-start inline-flex">
            <div>
              <div className="text-sm font-bold leading-tight">{title}</div>
              <div className="h-10 left-0 top-[27px] flex-col justify-start items-start inline-flex">
                <div className="h-5 text-neutral-500 text-xs leading-none">
                  {address}
                </div>
                <div className="text-neutral-500 text-xs leading-none">
                  {houseType} ∙ 방{roomCount}개 ∙ 주차장{' '}
                  {hasParking ? '있음' : '없음'} ∙ 반려동물{' '}
                  {isPetAvailable ? '가능' : '불가'} ∙ 승강기{' '}
                  {elevatorCount > 0 ? '있음' : '없음'}
                </div>
              </div>
            </div>
            <Image
              src={`/images/ic_like_${isLiked ? 'pressed' : 'normal'}.svg`}
              alt="like"
              width={28}
              height={28}
            />
          </div>
          <div className="self-stretch h-6 text-lg font-semibold font-['Montserrat'] leading-normal">
            ₩ {price}
          </div>
        </div>
      </div>
    </Link>
  )
}

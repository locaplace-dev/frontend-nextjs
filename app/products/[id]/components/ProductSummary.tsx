import Image from 'next/image'

export default function ProductSummary() {
  return (
    <div className="py-5 flex-col justify-start items-start gap-3.5 inline-flex w-full">
      <div className="self-stretch flex-col justify-start items-start gap-3 flex">
        <div className="self-stretch justify-between items-center inline-flex">
          <div className="px-2.5 py-1.5 bg-green-600/90 rounded-full justify-center items-center gap-2.5 flex">
            <div className="text-white text-xs  font-['SpoqaHanSans'] leading-none">
              강남역 1km
            </div>
          </div>
          <Image
            src={'/images/ic_like_pressed.svg'}
            alt="like"
            width={28}
            height={28}
          />
        </div>
        <div className="flex-col justify-start items-start gap-0.5 flex">
          <div className="text-xl leading-7">역세권 숲 속의 아늑한 공간</div>
          <div className="text-sm leading-tight">서울시 강남구 논현동</div>
          <div className="text-neutral-500 text-xs leading-none">
            전용면적 6평 (20m²) ∙ 방 2개 ∙ 거실 1개 ∙ 주방 1개 ∙ 화장실 1개
          </div>
        </div>
      </div>
      <div className="flex-col justify-start items-start gap-1 flex">
        <div className="justify-start items-center gap-0.5 inline-flex">
          <div className=" text-xl font-semibold font-['Montserrat'] leading-7">
            ₩ 300,000
          </div>
          <div className="text-neutral-500 text-sm leading-tight">/1주</div>
        </div>
        <div className="justify-start items-center gap-1.5 inline-flex">
          <Image
            src={'/images/ic_review.svg'}
            alt="review"
            height={15}
            width={15}
          />
          <div className="text-neutral-500 text-xs">4.5 ∙ 후기 23개</div>
        </div>
      </div>
    </div>
  )
}

import SubTitle from './SubTitle'

export default function ProductUsage() {
  return (
    <div className="flex-col justify-start items-start inline-flex w-full">
      <SubTitle subtitle="방 이용방법" />
      <div className="h-10  pb-5 justify-center items-center gap-2.5 inline-flex">
        <div className=" text-black text-sm font-normal font-['Spoqa Han Sans Neo'] leading-snug">
          ∙ 계약완료후 자세한 이용방법을 알려드립니다
        </div>
      </div>
    </div>
  )
}

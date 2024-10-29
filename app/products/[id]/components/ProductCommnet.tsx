import SubTitle from './SubTitle'

export default function ProductComment() {
  return (
    <div className="flex-col justify-start items-start inline-flex w-full">
      <SubTitle subtitle="소개" />
      <div className="h-32  pb-5 justify-center items-center gap-2.5 inline-flex">
        <div>
          <span className="text-black text-sm font-normal font-['Spoqa Han Sans Neo'] leading-tight">
            아름다운 노을과 함께 사계절 변화하는 자연을 방안에서도 만끽하며 느낄
            수 있는 아늑한 공간입니다. 역세권이고 2호선 강남역과도 가까워 이동이
            편리합니다.
            <br />
            <br />
          </span>
          <span className="text-black text-sm font-normal font-['Spoqa Han Sans Neo'] underline leading-tight">
            더보기
          </span>
        </div>
      </div>
    </div>
  )
}

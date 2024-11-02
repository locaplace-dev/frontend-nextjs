import SubTitle from './SubTitle'

export default function ProductComment({ comment }: { comment: string }) {
  return (
    <div className="flex-col justify-start items-start inline-flex w-full">
      <SubTitle subtitle="소개" />
      <div className="h-32  pb-5 justify-center items-center gap-2.5 inline-flex">
        <div>
          <span className="text-black text-sm font-normal font-['Spoqa Han Sans Neo'] leading-tight">
            {comment}
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

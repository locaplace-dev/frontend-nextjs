import SubTitle from './SubTitle'

export default function ProductLocation() {
  return (
    <div className="flex-col justify-start items-start inline-flex w-full">
      <SubTitle subtitle="위치" />
      <div className="w-full pb-5 flex-col justify-start items-start gap-2.5 inline-flex">
        <div className="w-full h-48 relative">
          <div className="w-full h-48 left-0 top-0 absolute bg-zinc-300 rounded-2xl" />
        </div>
      </div>
    </div>
  )
}

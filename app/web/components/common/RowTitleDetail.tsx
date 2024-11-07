export default function RowTitleDetail({
  label,
  value,
  isNumber = true,
}: {
  label: string
  value: string
  isNumber?: boolean
}) {
  return (
    <div className="h-8  pb-2.5 justify-between items-center inline-flex">
      <div className="w-24 text-black text-sm font-normal font-['Spoqa Han Sans Neo'] leading-tight">
        {label}
      </div>
      <div className="w-56 text-right text-black text-sm font-medium font-['Montserrat'] leading-tight">
        {isNumber ? '₩' : ''}
        {value}
      </div>
    </div>
  )
}

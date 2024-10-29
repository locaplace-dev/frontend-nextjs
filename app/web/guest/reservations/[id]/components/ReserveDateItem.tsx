interface ReserveDateItemProps {
  label: string
  formattedDate: string
}

export default function ReserveDateItem({
  label,
  formattedDate,
}: ReserveDateItemProps) {
  return (
    <div className="w-full h-16 px-6 py-2.5 bg-stone-50 rounded-xl border border-stone-300 flex-col justify-start items-center gap-0.5 inline-flex">
      <div className=" text-center  text-sm  font-['Spoqa Han Sans Neo'] leading-tight">
        {label}
      </div>
      <div className=" text-center  text-sm  font-['Montserrat'] leading-tight">
        {formattedDate}
      </div>
    </div>
  )
}

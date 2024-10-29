export default function ({ subtitle }: { subtitle: string }) {
  return (
    <div className="h-14 pt-5 pb-3 justify-start items-center gap-2.5 inline-flex">
      <div className="text-black text-base font-medium font-['Spoqa Han Sans Neo'] leading-normal">
        {subtitle}
      </div>
    </div>
  )
}

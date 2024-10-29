interface PageTitleProps {
  title: string
}

export default function PageTitle({ title }: PageTitleProps) {
  return (
    <div className="h-14 pb-3.5 justify-start items-center gap-2.5 flex">
      <div className="text-black text-2xl font-normal font-['Spoqa Han Sans Neo'] leading-10">
        {title}
      </div>
    </div>
  )
}

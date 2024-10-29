import { CustomLink } from '@/app/navigator'
import Image from 'next/image'

interface UsageButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  underline: string
  title: string
  active: boolean
  href: string
  name: string
  click: Function
}

export default function UsageAgreeButton({
  title,
  underline,
  active,
  name,
  href,
  click,
}: UsageButtonProps) {
  return (
    <CustomLink href={href} className="">
      <div
        className={`h-14 p-4 w-full rounded-xl border ${
          active ? 'border-teal-400' : 'border-stone-300/50'
        } justify-between items-center inline-flex`}
      >
        <div className="text-center">
          <span
            className={`${
              active ? 'text-teal-400' : 'text-black'
            } text-sm underline leading-snug`}
          >
            {underline}
          </span>
          <span
            className={`${
              active ? 'text-teal-400' : 'text-black'
            } text-sm  leading-snug`}
          >
            {title}
          </span>
        </div>
        <Image
          onClick={(event: React.MouseEvent) => {
            event.stopPropagation()
            event.preventDefault()
            console.log(event)
            click(name)
          }}
          src={`/images/ic_agreement_${active ? '' : 'un'}selected.svg`}
          alt="pin"
          width={24}
          height={24}
        />
      </div>
    </CustomLink>
  )
}

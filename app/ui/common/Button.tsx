import clsx from 'clsx'

//typescirpt
export const enum BUTTON_TYPE {
  primary,
  secondary,
  inactive,
}

type buttonStyleType = {
  background: string
  text: string
}

const buttonStyle: Record<BUTTON_TYPE, buttonStyleType> = {
  [BUTTON_TYPE.primary]: {
    background: 'bg-teal-400',
    text: 'text-white ',
  },
  [BUTTON_TYPE.secondary]: {
    background: 'border border-teal-400',
    text: 'text-teal-400',
  },
  [BUTTON_TYPE.inactive]: {
    background: 'bg-gray-200',
    text: 'text-white',
  },
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: React.ReactNode
  buttonType: BUTTON_TYPE
}

export function Button({ className, buttonType, label, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        (className =
          'w-full h-14 px-5 py-4 rounded-xl justify-center items-center gap-2.5 inline-flex'),
        buttonStyle[buttonType].background,
        className
      )}
    >
      <div
        className={clsx(
          "text-sm font-bold font-['Spoqa Han Sans Neo'] leading-snug",
          buttonStyle[buttonType].text
        )}
      >
        {label}
      </div>
    </button>
  )
}

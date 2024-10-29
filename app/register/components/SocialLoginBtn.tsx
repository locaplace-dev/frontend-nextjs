import Image from 'next/image'
import { Button, BUTTON_TYPE } from '../../ui/common/Button'

//typescirpt
export const enum SOCIAL_LOGIN_TYPE {
  apple,
  kakao,
  naver,
  google,
}
type socialLoginType = {
  image: string
  label: string
}

interface SocialLoginButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  social_type: SOCIAL_LOGIN_TYPE
}

const buttonStyle: Record<SOCIAL_LOGIN_TYPE, socialLoginType> = {
  [SOCIAL_LOGIN_TYPE.apple]: {
    image: 'ic_apple',
    label: '애플',
  },
  [SOCIAL_LOGIN_TYPE.kakao]: {
    image: 'ic_kakao',
    label: '카카오',
  },
  [SOCIAL_LOGIN_TYPE.google]: {
    image: 'ic_google',
    label: '구글',
  },
  [SOCIAL_LOGIN_TYPE.naver]: {
    image: 'ic_naver',
    label: '네이버',
  },
}

export function SocialLoginButton({
  social_type,
  onClick,
}: SocialLoginButtonProps) {
  return (
    <Button
      onClick={onClick}
      label={
        <div className="flex items-center">
          <Image
            width={26}
            height={26}
            src={`/images/${buttonStyle[social_type].image}.svg`}
            alt="social"
          />
          <div className="pl-1 text-black text-sm font-medium font-['Spoqa Han Sans Neo'] leading-snug">
            {buttonStyle[social_type].label} 로그인
          </div>
        </div>
      }
      buttonType={BUTTON_TYPE.secondary}
    ></Button>
  )
}

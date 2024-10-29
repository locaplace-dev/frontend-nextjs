import Image from 'next/image'
import SubTitle from './SubTitle'

const InitBasicOptionsState: Array<OptionItemProps> = [
  {
    label: '아파트',
    image: 'ic_apt',
  },
  {
    label: '방 2개',
    image: 'ic_room',
  },
  {
    label: '거실1개',
    image: 'ic_living',
  },
  {
    label: '주방 1개',
    image: 'ic_dining',
  },
  {
    label: '화장실 1개',
    image: 'ic_bathroom',
  },
  {
    label: '주차장 있음',
    image: 'ic_parking',
  },
  {
    label: '승강기 있음',
    image: 'ic_elevator',
  },
  {
    label: '욕조 있음',
    image: 'ic_tube',
  },
  {
    label: '반려동물',
    image: 'ic_pet',
  },
]

export default function ProductOptions() {
  return (
    <div className="flex-col justify-start items-start inline-flex w-full">
      <SubTitle subtitle="기본 정보" />
      <div className="grid grid-cols-3 gap-5 gap-y-2.5 w-full">
        {InitBasicOptionsState.map((item, elem) => {
          return <OptionItem {...item} />
        })}
      </div>
    </div>
  )
}

interface OptionItemProps {
  label: string
  image: string
}

function OptionItem({ label, image }: OptionItemProps) {
  return (
    <div className="justify-start items-center gap-2 flex">
      <Image src={`/images/${image}.svg`} width={24} height={24} alt="apt" />
      <div className="w-14 text-black text-xs font-normal font-['Spoqa Han Sans Neo'] leading-none">
        {label}
      </div>
    </div>
  )
}

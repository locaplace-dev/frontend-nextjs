import SubTitle from './SubTitle'

const initAddonLists = [
  '드라이어',
  '샴푸',
  '욕조',
  '온수',
  'TV',
  '에어컨',
  '드라이어',
  '샴푸',
  '욕조',
  '온수',
  'TV',
  '에어컨',
  '드라이어',
  '샴푸',
  '욕조',
  '온수',
  'TV',
  '에어컨',
]

export default function ProductAddons() {
  return (
    <div className="flex-col justify-start items-start inline-flex w-full">
      <SubTitle subtitle="편의시설" />
      <div className="grid grid-cols-4 gap-5 gap-y-2.5 w-full">
        {initAddonLists.map((elem, idx) => (
          <div
            key={`product-addons-${idx}`}
            className="w-16 text-black text-xs font-normal font-['Spoqa Han Sans Neo'] leading-none"
          >
            {elem}
          </div>
        ))}
      </div>
    </div>
  )
}

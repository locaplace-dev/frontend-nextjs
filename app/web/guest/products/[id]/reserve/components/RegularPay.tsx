import SelectButton from '@/app/web/components/common/SelectButton'
import Image from 'next/image'

interface RegularPayProps {
  isRegularPay: boolean
  setIsRegularPay: Function
  regularPayDate: string | null
  setRegularPayDate: Function
}

export default function RegularPay({
  isRegularPay,
  setIsRegularPay,
  regularPayDate,
  setRegularPayDate,
}: RegularPayProps) {
  return (
    <div className="border border-stone-300">
      <div
        className="w-full h-24 px-4 py-5 flex-col justify-start items-start gap-3 inline-flex  cursor-pointer"
        onClick={() => {
          setIsRegularPay()
        }}
      >
        <div className="self-stretch p-4 rounded-xl border border-black justify-between items-center inline-flex">
          <div className="grow shrink basis-0 h-5 justify-start items-center gap-3 flex">
            <Image
              src={`/images/ic_check_${isRegularPay ? '' : 'un'}selected.svg`}
              alt="check"
              width={16}
              height={16}
            />

            <div className="text-right text-sm font-normal font-['Spoqa Han Sans Neo'] leading-tight">
              정기결제
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-24 px-4 pt-2.5 pb-5 flex-col justify-start items-start gap-2 inline-flex">
        <SelectButton
          value={regularPayDate}
          onChange={setRegularPayDate}
          hintText="결제일을 선택해주세요."
          label="정기 결제일"
          list={['매달 7일', '매달 14일', '매달 21일']}
        />
      </div>
    </div>
  )
}

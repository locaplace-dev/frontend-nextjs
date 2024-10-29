import SelectButton from '@/app/web/components/common/SelectButton'

export default function RegularPay() {
  return (
    <div className="border border-stone-300">
      <div className="w-full h-24 px-4 py-5 flex-col justify-start items-start gap-3 inline-flex">
        <div className="self-stretch p-4 rounded-xl border border-black justify-between items-center inline-flex">
          <div className="grow shrink basis-0 h-5 justify-start items-center gap-3 flex">
            <div className="w-4 h-4 relative">
              <div className="w-4 h-4 left-0 top-0 absolute bg-black rounded-full" />
            </div>
            <div className="text-right text-black text-sm font-normal font-['Spoqa Han Sans Neo'] leading-tight">
              정기결제
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-24 px-4 pt-2.5 pb-5 flex-col justify-start items-start gap-2 inline-flex">
        <SelectButton label="정기 결제일" />
      </div>
    </div>
  )
}

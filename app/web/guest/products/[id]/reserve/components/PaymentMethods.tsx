import { Button, BUTTON_TYPE } from '@/app/web/components/common/Button'
import Divider from '@/app/web/components/common/Divider'

export default function SelectPaymentMethods() {
  return (
    <div>
      <SelectCard />
      <Divider />
      <SelectAccount />
      <Divider />
      <Select3rdPayment />
    </div>
  )
}

function SelectCard() {
  return (
    <div className="flex flex-col px-4">
      <div className="h-14 pt-5 pb-3 justify-between items-center inline-flex">
        <div className="text-black text-base font-medium font-['Spoqa Han Sans Neo'] leading-normal">
          결제 수단
        </div>
        <div className="justify-start items-center gap-2.5 flex">
          <div className="w-5 h-5 py-1 justify-center items-center flex">
            <div className="w-5 h-3 relative"></div>
          </div>
          <div className="w-5 h-5 relative" />
          <div className="w-5 h-5 py-1.5 justify-center items-center flex">
            <div className="w-5 h-2 relative"></div>
          </div>
        </div>
      </div>
      <div className="h-14 p-4 rounded-xl border border-black justify-between items-center inline-flex">
        <div className="justify-start items-center gap-3 flex">
          <div className="w-10 h-5 relative">
            <div className="w-10 h-5 left-0 top-0 absolute" />
            <div className="w-7 h-5 left-[5px] top-[1px] absolute"></div>
          </div>
          <div className="justify-start items-center gap-3 flex">
            <div className="text-black text-sm font-normal font-['Spoqa Han Sans Neo'] leading-snug">
              KB/국민카드
            </div>
            <div className="text-black text-sm font-normal font-['Spoqa Han Sans Neo'] leading-snug">
              322●
            </div>
          </div>
        </div>
        <div className="w-5 h-5 relative">
          <div className="w-5 h-5 left-0 top-0 absolute" />
        </div>
      </div>
      <div className="h-14 pt-3 pb-5 justify-between items-center inline-flex">
        <div className="justify-start items-center gap-1.5 flex">
          <div className="w-4 h-4 relative">
            <div className="w-4 h-4 left-0 top-0 absolute bg-black rounded-full" />
          </div>
          <div className="text-right text-black text-xs font-normal font-['Spoqa Han Sans Neo'] leading-none">
            기본 결제수단으로 사용
          </div>
        </div>
        <div className="text-right text-teal-400 text-sm font-normal font-['Spoqa Han Sans Neo'] leading-tight">
          +새 카드 추가
        </div>
      </div>
      <div className=" pb-5 flex-col justify-start items-start gap-2.5 inline-flex">
        <Button buttonType={BUTTON_TYPE.primary} label="선택완료" />
      </div>
    </div>
  )
}

function SelectAccount() {
  return (
    <div className="flex flex-col px-4">
      <div className="h-14 px-4 pt-5 pb-3 justify-between items-center inline-flex">
        <div className="text-black text-sm font-medium font-['Spoqa Han Sans Neo'] leading-tight">
          계좌이체/무통장 입금
        </div>
        <div className="w-5 h-5 relative">
          <div className="w-5 h-5 left-0 top-0 absolute" />
          <img
            className="w-5 h-5 left-0 top-0 absolute"
            src="https://via.placeholder.com/22x22"
          />
        </div>
      </div>
      <div className="w-full h-14  flex-col justify-start items-start gap-3 inline-flex">
        <div className="self-stretch p-4 rounded-xl border border-black justify-between items-center inline-flex">
          <div className="justify-start items-center gap-3 flex">
            <div className="justify-start items-center gap-3 flex">
              <div className="text-black text-sm font-normal font-['Spoqa Han Sans Neo'] leading-snug">
                국민은행
              </div>
              <div className="text-black text-sm font-normal font-['Spoqa Han Sans Neo'] leading-snug">
                ●●●●3223
              </div>
            </div>
          </div>
          <div className="w-5 h-5 relative">
            <div className="w-5 h-5 left-0 top-0 absolute" />
          </div>
        </div>
      </div>
      <div className="h-14 pt-3 pb-5 justify-between items-center inline-flex">
        <div className="justify-start items-center gap-1.5 flex">
          <div className="w-4 h-4 relative">
            <div className="w-4 h-4 left-0 top-0 absolute bg-stone-300 rounded-full" />
          </div>
          <div className="text-right text-black text-xs font-normal font-['Spoqa Han Sans Neo'] leading-none">
            기본 결제수단으로 사용
          </div>
        </div>
        <div className="text-right text-teal-400 text-sm font-normal font-['Spoqa Han Sans Neo'] leading-tight">
          +새 계좌 추가
        </div>
      </div>
      <div className="h-20  pb-5 flex-col justify-start items-start gap-2.5 inline-flex">
        <Button buttonType={BUTTON_TYPE.primary} label="선택완료" />
      </div>
    </div>
  )
}
function Select3rdPayment() {
  return (
    <div className="w-full h-72 px-4 py-5 flex-col justify-start items-start gap-3 inline-flex">
      <Payment3rdItem />
      <Payment3rdItem />
      <Payment3rdItem />
      <Payment3rdItem />
    </div>
  )
}

function Payment3rdItem() {
  return (
    <div className="self-stretch p-4 rounded-xl border border-black justify-between items-center inline-flex">
      <div className="grow shrink basis-0 h-5 justify-start items-center gap-3 flex">
        <div className="justify-start items-center gap-3 flex">
          <div className="text-black text-sm font-normal font-['Spoqa Han Sans Neo'] leading-snug">
            네이버 페이
          </div>
        </div>
      </div>
    </div>
  )
}

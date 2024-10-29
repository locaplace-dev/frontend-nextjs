import Image from 'next/image'

export default function SwitchHostAndUseBtn() {
  return (
    <div className="cursor-pointer w-full h-14 px-5 py-4 rounded-xl border border-black justify-center items-center gap-1.5 inline-flex">
      <Image
        src={'/images/ic_transfer.svg'}
        alt="transfer"
        width={24}
        height={24}
      />
      <div className="text-black text-sm font-medium font-['Spoqa Han Sans Neo'] leading-snug">
        호스트로 전환하기
      </div>
    </div>
  )
}

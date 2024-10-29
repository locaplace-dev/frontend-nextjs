import { Button, BUTTON_TYPE } from '@/app/web/components/common/Button'

interface ReserveActionButtonProps {
  status: number
}

export default function ReserveActionButton({
  status,
}: ReserveActionButtonProps) {
  return (
    <div className="py-5 w-full flex-col justify-start items-start gap-2.5 inline-flex">
      {status == 1 ? (
        <Button buttonType={BUTTON_TYPE.secondary} label="예약 취소" />
      ) : status == 2 ? (
        <Button
          buttonType={BUTTON_TYPE.secondary}
          label="보증금 반환신청하기"
        />
      ) : status == 3 ? (
        <div className="flex flex-col w-full inline-flex gap-2">
          <Button buttonType={BUTTON_TYPE.inactive} label="예약 취소됨" />
          <Button
            buttonType={BUTTON_TYPE.secondary}
            label="예약취소 문의하기"
          />
        </div>
      ) : status == 4 ? (
        <div className="flex flex-col w-full inline-flex gap-2">
          <Button buttonType={BUTTON_TYPE.inprogress} label="예약 완료됨" />
          <Button
            buttonType={BUTTON_TYPE.secondary}
            label="예약취소 문의하기"
          />
        </div>
      ) : (
        <Button buttonType={BUTTON_TYPE.secondary} label="예약 취소" />
      )}
    </div>
  )
}

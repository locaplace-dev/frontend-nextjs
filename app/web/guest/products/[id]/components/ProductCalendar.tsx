import { Button, BUTTON_TYPE } from '@/app/web/components/common/Button'
import SubTitle from './SubTitle'

import Calendar from 'react-calendar'
import moment from 'moment'
import './ProductCalendar.css'

interface ProductCalendar {
  startDate: string | undefined
  endDate: string | undefined
  noMatterDate: boolean
  changeDate: Function
  setNoMatterDate: Function
}

export default function ProductCalendar({
  startDate,
  endDate,
  noMatterDate,
  changeDate,
  setNoMatterDate,
}: ProductCalendar) {
  return (
    <div className="w-full">
      <SubTitle
        subtitle={`일정 선택:${
          noMatterDate
            ? '일정 미정'
            : startDate && endDate
            ? `${startDate} - ${endDate}`
            : ''
        } `}
      />
      <Button
        label="일정 미정"
        buttonType={noMatterDate ? BUTTON_TYPE.primary : BUTTON_TYPE.secondary}
        onClick={() => {
          setNoMatterDate(!noMatterDate)
        }}
      />
      <div
        className="w-full py-5 pb-7 flex-col justify-start items-center gap-5 inline-flex overflow-y-scroll"
        style={{ maxHeight: 500 }}
      >
        <Calendar
          className="w-full"
          tileContent={true}
          onChange={(e) => {
            changeDate(e)
          }}
          selectRange={true}
          formatDay={(locale, date) => moment(date).format('DD')}
        />
      </div>
    </div>
  )
}

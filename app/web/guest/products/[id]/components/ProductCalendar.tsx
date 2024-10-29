import { Button, BUTTON_TYPE } from '@/app/web/components/common/Button'
import SubTitle from './SubTitle'

export default function ProductCalendar() {
  return (
    <div className="w-full">
      <SubTitle subtitle="일정 선택" />
      <Button label="일정 미정" buttonType={BUTTON_TYPE.secondary} />
      <div
        className="w-full pb-7 flex-col justify-start items-center gap-5 inline-flex overflow-y-scroll"
        style={{ maxHeight: 500 }}
      >
        <div className="h-56 w-full relative">
          <div className="text-center text-black text-sm font-semibold font-['Montserrat'] leading-tight">
            2024년 10월
          </div>
          <div className="w-full h-5 left-0 top-[35px] absolute justify-between items-start inline-flex">
            <div className="w-10 h-5 text-center text-black text-xs font-normal font-['Spoqa Han Sans Neo'] leading-none">
              일
            </div>
            <div className="w-10 h-5 text-center text-black text-xs font-normal font-['Spoqa Han Sans Neo'] leading-none">
              월
            </div>
            <div className="w-10 h-5 text-center text-black text-xs font-normal font-['Spoqa Han Sans Neo'] leading-none">
              화
            </div>
            <div className="w-10 h-5 text-center text-black text-xs font-normal font-['Spoqa Han Sans Neo'] leading-none">
              수
            </div>
            <div className="w-10 h-5 text-center text-black text-xs font-normal font-['Spoqa Han Sans Neo'] leading-none">
              목
            </div>
            <div className="w-10 h-5 text-center text-black text-xs font-normal font-['Spoqa Han Sans Neo'] leading-none">
              금
            </div>
            <div className="w-10 h-5 text-center text-black text-xs font-normal font-['Spoqa Han Sans Neo'] leading-none">
              토
            </div>
          </div>
          <div className="w-full h-px left-0 top-[69px] absolute border border-stone-300"></div>
          <div className="h-36 left-0 top-[83px] absolute flex-col justify-start items-start gap-7 inline-flex">
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-2.5 flex">
                <div className="self-stretch h-5 justify-between items-start inline-flex">
                  <div className="w-10 h-5 text-center text-neutral-400 text-xs font-normal font-['Montserrat'] line-through leading-none">
                    29
                  </div>
                  <div className="w-10 h-5 text-center text-neutral-400 text-xs font-normal font-['Montserrat'] line-through leading-none">
                    30
                  </div>
                  <div className="w-10 h-5 text-center text-neutral-400 text-xs font-normal font-['Montserrat'] line-through leading-none">
                    1
                  </div>
                  <div className="w-10 h-5 text-center text-neutral-400 text-xs font-normal font-['Montserrat'] line-through leading-none">
                    2
                  </div>
                  <div className="w-10 h-5 text-center text-neutral-400 text-xs font-normal font-['Montserrat'] line-through leading-none">
                    3
                  </div>
                  <div className="w-10 h-5 text-center text-neutral-400 text-xs font-normal font-['Montserrat'] line-through leading-none">
                    4
                  </div>
                  <div className="w-10 h-5 text-center text-neutral-400 text-xs font-normal font-['Montserrat'] line-through leading-none">
                    5
                  </div>
                </div>
                <div className="self-stretch h-5 justify-between items-start inline-flex">
                  <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                    6
                  </div>
                  <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                    7
                  </div>
                  <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                    8
                  </div>
                  <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                    9
                  </div>
                  <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                    10
                  </div>
                  <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                    11
                  </div>
                  <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                    12
                  </div>
                </div>
                <div className="self-stretch h-5 justify-between items-start inline-flex">
                  <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                    13
                  </div>
                  <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                    14
                  </div>
                  <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                    15
                  </div>
                  <div className="w-44 h-5 relative">
                    <div className="w-40 h-5 left-[20px] top-0 absolute bg-teal-400/10" />
                    <div className="w-10 h-5 left-[48px] top-0 absolute text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                      17
                    </div>
                    <div className="w-10 h-5 left-[96px] top-0 absolute text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                      18
                    </div>
                    <div className="w-10 h-5 left-[144px] top-0 absolute text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                      19
                    </div>
                    <div className="h-5 left-0 top-0 absolute justify-center items-center gap-2.5 inline-flex">
                      <div className="w-10 h-5 relative">
                        <div className="w-5 h-5 left-[10px] top-0 absolute bg-teal-400 rounded-full" />
                        <div className="w-10 h-5 left-0 top-0 absolute text-center text-white text-xs font-medium font-['Montserrat'] leading-none">
                          16
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full h-5 relative">
                  <div className="w-full h-5 left-0 top-0 absolute bg-teal-400/10" />
                  <div className="w-full h-5 left-0 top-[0.40px] absolute justify-between items-start inline-flex">
                    <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                      20
                    </div>
                    <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                      21
                    </div>
                    <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                      22
                    </div>
                    <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                      23
                    </div>
                    <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                      24
                    </div>
                    <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                      25
                    </div>
                    <div className="justify-center items-center gap-2.5 flex">
                      <div className="w-10 h-5 relative">
                        <div className="w-5 h-5 left-[10px] top-0 absolute bg-teal-400 rounded-full" />
                        <div className="w-10 h-5 left-0 top-0 absolute text-center text-white text-xs font-medium font-['Montserrat'] leading-none">
                          26
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-5 justify-between items-start inline-flex">
                  <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                    27
                  </div>
                  <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                    28
                  </div>
                  <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                    29
                  </div>
                  <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                    30
                  </div>
                  <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                    31
                  </div>
                  <div className="w-10 h-5 text-center text-neutral-400 text-xs font-normal font-['Montserrat'] leading-none">
                    1
                  </div>
                  <div className="w-10 h-5 text-center text-neutral-400 text-xs font-normal font-['Montserrat'] leading-none">
                    2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-px border border-stone-300"></div>
        <div className="h-56 w-full relative">
          <div className=" text-center text-black text-sm font-semibold font-['Montserrat'] leading-tight">
            2024년 11월
          </div>
          <div className="w-full h-5 left-0 top-[35px] absolute justify-between items-start inline-flex">
            <div className="w-10 h-5 text-center text-black text-xs font-normal font-['Spoqa Han Sans Neo'] leading-none">
              일
            </div>
            <div className="w-10 h-5 text-center text-black text-xs font-normal font-['Spoqa Han Sans Neo'] leading-none">
              월
            </div>
            <div className="w-10 h-5 text-center text-black text-xs font-normal font-['Spoqa Han Sans Neo'] leading-none">
              화
            </div>
            <div className="w-10 h-5 text-center text-black text-xs font-normal font-['Spoqa Han Sans Neo'] leading-none">
              수
            </div>
            <div className="w-10 h-5 text-center text-black text-xs font-normal font-['Spoqa Han Sans Neo'] leading-none">
              목
            </div>
            <div className="w-10 h-5 text-center text-black text-xs font-normal font-['Spoqa Han Sans Neo'] leading-none">
              금
            </div>
            <div className="w-10 h-5 text-center text-black text-xs font-normal font-['Spoqa Han Sans Neo'] leading-none">
              토
            </div>
          </div>
          <div className="w-full h-px left-0 top-[69px] absolute border border-stone-300"></div>
          <div className="h-36 left-0 top-[83px] absolute flex-col justify-start items-start gap-7 inline-flex">
            <div className="flex-col justify-start items-start gap-5 flex">
              <div className="self-stretch grow shrink basis-0 flex-col justify-start items-start gap-2.5 flex">
                <div className="self-stretch h-5 justify-between items-start inline-flex">
                  <div className="w-10 h-5 text-center text-neutral-400 text-xs font-normal font-['Montserrat'] line-through leading-none">
                    29
                  </div>
                  <div className="w-10 h-5 text-center text-neutral-400 text-xs font-normal font-['Montserrat'] line-through leading-none">
                    30
                  </div>
                  <div className="w-10 h-5 text-center text-neutral-400 text-xs font-normal font-['Montserrat'] line-through leading-none">
                    1
                  </div>
                  <div className="w-10 h-5 text-center text-neutral-400 text-xs font-normal font-['Montserrat'] line-through leading-none">
                    2
                  </div>
                  <div className="w-10 h-5 text-center text-neutral-400 text-xs font-normal font-['Montserrat'] line-through leading-none">
                    3
                  </div>
                  <div className="w-10 h-5 text-center text-neutral-400 text-xs font-normal font-['Montserrat'] line-through leading-none">
                    4
                  </div>
                  <div className="w-10 h-5 text-center text-neutral-400 text-xs font-normal font-['Montserrat'] line-through leading-none">
                    5
                  </div>
                </div>
                <div className="self-stretch h-5 justify-between items-start inline-flex">
                  <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                    6
                  </div>
                  <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                    7
                  </div>
                  <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                    8
                  </div>
                  <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                    9
                  </div>
                  <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                    10
                  </div>
                  <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                    11
                  </div>
                  <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                    12
                  </div>
                </div>
                <div className="self-stretch h-5 justify-between items-start inline-flex">
                  <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                    13
                  </div>
                  <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                    14
                  </div>
                  <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                    15
                  </div>
                  <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                    16
                  </div>
                  <div className="w-32 h-5 relative">
                    <div className="w-10 h-5 left-0 top-0 absolute text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                      17
                    </div>
                    <div className="w-10 h-5 left-[48px] top-0 absolute text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                      18
                    </div>
                    <div className="w-10 h-5 left-[96px] top-0 absolute text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                      19
                    </div>
                  </div>
                </div>
                <div className="self-stretch grow shrink basis-0 justify-between items-start inline-flex">
                  <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                    20
                  </div>
                  <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                    21
                  </div>
                  <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                    22
                  </div>
                  <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                    23
                  </div>
                  <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                    24
                  </div>
                  <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                    25
                  </div>
                  <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                    26
                  </div>
                </div>
                <div className="self-stretch h-5 justify-between items-start inline-flex">
                  <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                    27
                  </div>
                  <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                    28
                  </div>
                  <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                    29
                  </div>
                  <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                    30
                  </div>
                  <div className="w-10 h-5 text-center text-black text-xs font-medium font-['Montserrat'] leading-none">
                    31
                  </div>
                  <div className="w-10 h-5 text-center text-neutral-400 text-xs font-normal font-['Montserrat'] leading-none">
                    1
                  </div>
                  <div className="w-10 h-5 text-center text-neutral-400 text-xs font-normal font-['Montserrat'] leading-none">
                    2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import Image from 'next/image'
import { ButtonHTMLAttributes, useState } from 'react'
import '@/app/web/guest/main/search/components/ProductSearchFilter.css'

// interface ProductSearchFilterProps {
//   showFilter: boolean
// }

const initFilterItems: Array<FilterItemProps> = [
  {
    label: '역 근처',
    image: 'station',
    selected: true,
  },
  {
    label: '인기순',
    image: 'popular',
    selected: false,
  },
  {
    label: '낮은가격',
    image: 'lowprice',
    selected: false,
  },
  {
    label: '높은가격',
    image: 'topprice',
    selected: false,
  },
  {
    label: '반려동물',
    image: 'pet',
    selected: false,
  },
  {
    label: '최신등록',
    image: 'new',
    selected: false,
  },
  {
    label: '다인실',
    image: 'group',
    selected: false,
  },
]

const initStationItems: Array<StationItemProps> = [
  { label: '사당역', selected: false },
  { label: '신림역', selected: false },
  { label: '서울대입구역', selected: false },
  { label: '강남', selected: false },
  { label: '건대입구', selected: false },
  { label: '동대문', selected: false },
  { label: '그외지역', selected: false },
]

export function ProductSearchFilter({ showFilters }: { showFilters: boolean }) {
  const [filters, setFilters] = useState(initFilterItems)

  const [stations, setStations] = useState(initStationItems)

  const onFilterClick = (label: string) => {
    let f = filters.map((elem, idx) => {
      if (elem.label == label) {
        return {
          ...elem,
          selected: !elem.selected,
        }
      } else {
        return elem
      }
    })
    setFilters(f)
  }

  const onStationClick = (label: string) => {
    let f = stations.map((elem, idx) => {
      if (elem.label == label) {
        return {
          ...elem,
          selected: !elem.selected,
        }
      } else {
        return elem
      }
    })
    setStations(f)
  }

  return (
    <div
      className={`cursor-pointer w-full  bg-white rounded-lg shadow flex-col justify-start items-start gap-3.5 inline-flex filter-options ${
        showFilters ? 'open' : ''
      }`}
    >
      <div className="w-full h-32 relative">
        <div className="grid grid-cols-4 gap-4">
          {filters.map((elem, idx) => {
            return FilterItem({
              ...elem,
              onClick: () => {
                onFilterClick(elem.label)
              },
            })
          })}
        </div>
      </div>
      <div className="w-full h-px border border-stone-300"></div>
      <div className="flex flex-wrap justify-start items-start gap-2 flex">
        {stations.map((elem, idx) => {
          return StationItem({
            ...elem,
            onClick: () => {
              onStationClick(elem.label)
            },
          })
        })}
      </div>
      <div className="w-full px-5 py-3 bg-black rounded-xl justify-center items-center gap-2.5 inline-flex">
        <div className="text-white text-sm font-bold leading-snug">확인</div>
      </div>
    </div>
  )
}

interface FilterItemProps extends ButtonHTMLAttributes<HTMLDivElement> {
  label: string
  image: string
  selected: boolean
}

function FilterItem({ label, image, selected, onClick }: FilterItemProps) {
  return (
    <div
      onClick={onClick}
      key={'filter-item' + label}
      className={`py-1.5 ${
        selected ? 'bg-black border' : 'border border-stone-300'
      }  rounded-md flex-col justify-center items-center gap-1 inline-flex cursor-pointer	`}
    >
      <Image
        src={`/images/ic_${image}.svg`}
        alt={image}
        width={26}
        height={26}
        color="white"
      />
      <div
        className={`w-12 text-center ${
          selected ? 'text-white font-medium' : 'font-normal text-black'
        } text-xs leading-tight`}
      >
        {label}
      </div>
    </div>
  )
}

interface StationItemProps extends ButtonHTMLAttributes<HTMLDivElement> {
  label: string
  selected: boolean
}

function StationItem({ label, selected, onClick }: StationItemProps) {
  return (
    <div
      onClick={onClick}
      key={'station-item' + label}
      className={`h-6 px-2 py-0.5 ${
        selected ? 'border bg-black' : 'border border-stone-300'
      } rounded  flex-col justify-center items-center gap-1 inline-flex`}
    >
      <div
        className={`text-center ${
          selected ? 'font-medium text-white' : 'text-black'
        }  text-xs leading-tight`}
      >
        {label}
      </div>
    </div>
  )
}

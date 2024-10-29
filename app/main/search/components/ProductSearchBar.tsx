'use client'

import Image from 'next/image'
import { ButtonHTMLAttributes, useState } from 'react'
import { ProductSearchFilter } from './ProductSearchFilter'

export function ProductSearchBar({}: ButtonHTMLAttributes<HTMLDivElement>) {
  const [showFilters, setShowFilters] = useState<boolean>(false)
  return (
    <div className="w-full pb-3.5 flex-col justify-center items-start gap-4 inline-flex relative">
      <div className="self-stretch px-3.5 py-2.5 bg-white rounded-full shadow justify-between items-center inline-flex ">
        <div className="flex">
          <Image
            src={'/images/ic_search.svg'}
            alt="search"
            width={26}
            height={26}
          />
          <div className="px-2.5 h-7 flex-col justify-center items-start inline-flex">
            <div className="h-4 text-xs   leading-none">
              어느 지역을 찾으세요?
            </div>
            <div className="h-3.5 text-neutral-400 text-xs   leading-none">
              날짜
            </div>
          </div>
        </div>
        <div
          className="w-8 h-8 relative cursor-pointer"
          onClick={() => setShowFilters(!showFilters)}
        >
          <Image
            src={'/images/btn_filter.svg'}
            alt="filter"
            width="34"
            height={34}
          />
        </div>
      </div>
      <ProductSearchFilter showFilters={showFilters} />
    </div>
  )
}

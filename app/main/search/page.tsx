import Image from 'next/image'
import { MainAppbar } from '../../ui/common/appbar'
import { ProductItem } from '../../ui/common/ProductItem'
import { BtmBar } from '../../ui/common/BtmBar'
import { ProductSearchFilter } from './components/ProductSearchFilter'
import { ProductSearchBar } from './components/ProductSearchBar'
import { useState } from 'react'

export default function MainTabPage() {
  return (
    <div className="w-full h-full flex-col flex">
      <ProductSearchBar />
      <SearchTab />
      <div className="h-16" />
    </div>
  )
}

const SearchTab = () => {
  return (
    <div className="flex-1 gap-3 flex flex-col overflow-scroll">
      <ProductItem
        isLiked={false}
        title="asdf"
        nearbyStation="신림역"
        address="서울시 강남구 논현동"
        houseType="원룸"
        roomCount={2}
        hasParking={false}
        isPetAvailable={true}
        elevatorCount={2}
        price={20000}
        id={1}
      />
      <ProductItem
        id={2}
        isLiked={false}
        title="역세권 숲 속의 아늑한 공간"
        nearbyStation="서울대병원"
        address="서울시 성북구 성북동"
        houseType="아파트"
        roomCount={2}
        hasParking={false}
        isPetAvailable={true}
        elevatorCount={2}
        price={20000}
      />
      <ProductItem
        id={3}
        isLiked={false}
        title="역세권 숲 속의 아늑한 공간"
        nearbyStation="서울대병원"
        address="서울시 성북구 성북동"
        houseType="아파트"
        roomCount={2}
        hasParking={false}
        isPetAvailable={true}
        elevatorCount={2}
        price={20000}
      />
    </div>
  )
}

'use client'

import { ProductSearchBar } from './components/ProductSearchBar'
import { useEffect, useState } from 'react'
import { ProductItem } from '@/app/web/components/common/ProductItem'
import { getAllProductsPaged } from '@/app/apis/guest/products'
import { Products } from '@/app/apis/guest/type'

export default function MainTabPage() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    const data = await getAllProductsPaged()
    if (data.content) {
      setProducts(data.content)
    }
  }

  return (
    <div className="w-full h-full flex-col flex">
      <ProductSearchBar />
      <SearchTab products={products} />
      <div className="h-16" />
    </div>
  )
}

const SearchTab = ({ products }: { products: Array<Products> }) => {
  return (
    <div className="flex-1 gap-3 flex flex-col overflow-scroll">
      {products.map((elem, idx) => (
        <ProductItem
          key={`search-product-item-${idx}`}
          isLiked={false}
          title={elem.title}
          nearbyStation={elem.stationNearby}
          address={elem.address}
          houseType={elem.houseType.label}
          roomCount={elem.roomCount}
          hasParking={elem.parkingLot}
          isPetAvailable={elem.petAvailable}
          elevatorCount={elem.productsDetails.elevatorCount}
          price={elem.price}
          id={elem.id}
        />
      ))}
      {/* <ProductItem
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
      /> */}
    </div>
  )
}

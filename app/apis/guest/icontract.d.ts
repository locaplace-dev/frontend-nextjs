export interface IContract {
  product: Product
  id: number
  startDate: string
  endDate: string
  dayCount: number
  isRegular: boolean
  regularPayDate: number
  paymentMethod: number
  inquiry: string
  status: number
  contractDate: string
}
export interface Product {
  id: number
  createdDateTime: string
  modifiedDateTime: string
  host: Host
  productsDetails: ProductsDetails
  title: string
  buildingType: BuildingType
  houseType: BuildingType
  roomCount: number
  roomSize: number
  guestCap: number
  parkingLot: boolean
  petAvailable: boolean
  price: number
  deposit?: any
  blockStartDate?: any
  blockEndDate?: any
  monthlyPrice: number
  levelRestriction: number
  postCode: string
  address: string
  stationNearby: string
  verificationStatus?: any
}
export interface ProductsDetails {
  id: number
  host: Host
  title: string
  roomSize: number
  guestCap: number
  parkingLot: boolean
  petAvailable: boolean
  buildingType: BuildingType
  houseType: BuildingType
  bedroomCount?: any
  bathroomCount: number
  kitchenCount: number
  livingroomCount: number
  elevatorCount: number
  address: string
  addressSido?: any
  addressGu?: any
  addressDetail?: any
  levelRestriction: number
  introductionUse: string
  introductionSpace: string
  stationNearby: string
  builtInMajor: BuiltInMajor
  builtInOptional: BuiltInOptional
  createdDateTime: string
  modifiedDateTime: string
}
export interface BuiltInOptional {
  abc: Abc
}
export interface Abc {
  name: string
}
export interface BuiltInMajor {
  abc: boolean
}
export interface BuildingType {
  id: number
  label: string
  labelEn: string
}
export interface Host {
  id: number
  createdDateTime: string
  modifiedDateTime: string
  level?: any
  email: string
  nickname: string
  phone_no?: any
  password: string
  verification?: any
  socialLoginPlatform: string
  socialLoginToken: string
  mkt_con_yn?: any
  location_con_yn?: any
  isHost?: any
  usersDetails?: any
}

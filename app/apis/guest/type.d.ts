export interface Products {
  id: number
  createdDateTime: string
  modifiedDateTime: string
  host: Host
  productsDetails: ProductsDetails
  title: string
  buildingType: BuildingType2
  houseType: HouseType2
  roomCount: number
  roomSize: number
  guestCap: number
  parkingLot: boolean
  petAvailable: boolean
  price: number
  deposit: any
  blockStartDate: any
  blockEndDate: any
  monthlyPrice: number
  levelRestriction: number
  postCode: string
  address: string
  stationNearby: string
  verificationStatus: any
}

export interface Host {
  id: number
  createdDateTime: string
  modifiedDateTime: string
  level: any
  email: string
  phone_no: any
  password: string
  verification: any
  socialLoginPlatform: any
  socialLoginToken: any
  mkt_con_yn: any
  location_con_yn: any
  isHost: any
  usersDetails: any
}

export interface ProductsDetails {
  id: number
  host: Host2
  title: string
  roomSize: number
  guestCap: number
  parkingLot: boolean
  petAvailable: boolean
  buildingType: BuildingType
  houseType: HouseType
  bedroomCount: any
  bathroomCount: number
  kitchenCount: number
  livingroomCount: number
  elevatorCount: number
  address: string
  addressSido: any
  addressGu: any
  addressDetail: any
  levelRestriction: number
  introductionUse: string
  introductionSpace: string
  stationNearby: string
  builtInMajor: BuiltInMajor
  builtInOptional: BuiltInOptional
  createdDateTime: string
  modifiedDateTime: string
}

export interface Host2 {
  id: number
  createdDateTime: string
  modifiedDateTime: string
  level: any
  email: string
  phone_no: any
  password: string
  verification: any
  socialLoginPlatform: any
  socialLoginToken: any
  mkt_con_yn: any
  location_con_yn: any
  isHost: any
  usersDetails: any
}

export interface BuildingType {
  id: number
  label: string
  labelEn: string
}

export interface HouseType {
  id: number
  label: string
  labelEn: string
}

export interface BuiltInMajor {
  abc: boolean
}

export interface BuiltInOptional {
  abc: Abc
}

export interface Abc {
  name: string
}

export interface BuildingType2 {
  id: number
  label: string
  labelEn: string
}

export interface HouseType2 {
  id: number
  label: string
  labelEn: string
}

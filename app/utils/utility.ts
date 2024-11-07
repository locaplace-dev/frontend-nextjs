export const getDateDiff = (date1: number, date2: number) => {
  const diffDate = date1 - date2

  return Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24))) // 밀리세컨 * 초 * 분 * 시 = 일
}

export const getCommaNumber = (price: number): string => {
  let returnString = price?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  return returnString
}

export const getNumberFromString = (value: string): number => {
  let regex = /[^0-9]/g
  let result = value.replace(regex, '')
  return Number(result)
}

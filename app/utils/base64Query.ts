export const getBase64String = (data: Object): string => {
  const jsonString = JSON.stringify(data)
  const base64String = btoa(jsonString)
  return base64String
}

export const decodeBase64String = (base64: string | null): Object => {
  const base64User = base64
  const json = atob(base64User ?? '')
  return JSON.parse(json)
}

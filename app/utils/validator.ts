// 유효성 검사 함수들
export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const validatePhone = (phone: string) => {
  const phoneRegex = /^\d{3}-\d{3,4}-\d{4}$/
  return phoneRegex.test(phone)
}

export const validateName = (name: string) => {
  return name.length > 1
}

// 비밀번호 유효성 검사 (8자리 이상, 특수 문자 포함 등)
export const validatePassword = (password: string) => {
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  return passwordRegex.test(password)
}

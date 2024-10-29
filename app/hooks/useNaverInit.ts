import { useCallback } from 'react'

const useNaverInit = () => {
  const handleNaverInit = useCallback(() => {
    const naver = window.naver

    const naverLogin = new naver.LoginWithNaverId({
      clientId: 'Nf28lGls6MlgWOLPQbmU',
      callbackUrl: 'http://localhost:8080/login/oauth2/code/naver', // Callback URL
      callbackHandle: true,
      isPopup: false, // 팝업 형태로 인증 여부
      loginButton: {
        color: 'green', // 색상
        type: 1, // 버튼 크기
        height: '60', // 버튼 높이
      }, // 로그인 버튼 설정
    })
  }, [...dependencies])

  useEffect(() => {
    handleNaverInit()
  }, [...dependencies])
}

export default useNaverInit

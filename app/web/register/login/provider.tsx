import { createContext, useContext, useReducer } from 'react'

// 타입 정의
interface LoginPageState {
  email: string
  password: string
  emailError: string
  passwordError: string
  passwordCheck: string
  passwordCheckError: string
  isLogin: boolean
}

// 초기 상태 설정
const initialState: LoginPageState = {
  email: '',
  emailError: '',
  password: '',
  passwordError: '',
  passwordCheck: '',
  passwordCheckError: '',
  isLogin: true,
}

type ActionType = {
  type: string
  payload: {
    name: keyof LoginPageState
    value: string
  }
}

export enum LOGIN_ACTION_KIND {
  INPUT = 'INPUT',
  TOGGLE_LOGIN = 'TOGGLE_LOGIN',
  CLEAR = 'CLEAR',
  ERROR = 'ERROR',
}

// 리듀서 함수 정의
function loginPageReducer(
  state: LoginPageState,
  action: ActionType
): LoginPageState {
  switch (action.type) {
    case LOGIN_ACTION_KIND.INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }
    case LOGIN_ACTION_KIND.TOGGLE_LOGIN:
      return {
        ...initialState,
        isLogin: !state.isLogin,
      }
    case LOGIN_ACTION_KIND.CLEAR:
      return {
        ...state,
        email: '',
        password: '',
        passwordCheck: '',
      }
    case LOGIN_ACTION_KIND.ERROR:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }
    default:
      return state
  }
}

type LoginContextType = {
  state: LoginPageState
  dispatch: React.Dispatch<ActionType>
}

// Context 생성
const LoginPageContext = createContext<LoginContextType | undefined>(undefined)

// Context Provider 생성
export function LoginPageProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(loginPageReducer, initialState)

  return (
    <LoginPageContext.Provider value={{ state: state, dispatch }}>
      {children}
    </LoginPageContext.Provider>
  )
}

// Context를 쉽게 사용하기 위한 커스텀 훅
export function useLoginContext() {
  const context = useContext(LoginPageContext)
  if (!context) {
    throw new Error('useInputContext must be used within an InputProvider')
  }
  return context
}

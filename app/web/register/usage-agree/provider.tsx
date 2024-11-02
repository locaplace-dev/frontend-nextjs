import { createContext, useContext, useReducer } from 'react'

// 타입 정의
interface UsageAgreeState {
  usage: boolean
  privacy: boolean
  location: boolean
  marketing: boolean
  adult: boolean
}

// 초기 상태 설정
const initialState: UsageAgreeState = {
  usage: false,
  privacy: false,
  location: false,
  marketing: false,
  adult: false,
}

type ActionType = {
  type: string
  payload: {
    name: keyof UsageAgreeState
  }
}

export enum USAGE_ACTION_KIND {
  TOGGLE = 'TOGGLE',
  TOGGLE_ALL = 'TOGGLE_ALL',
}

// 리듀서 함수 정의
function loginPageReducer(
  state: UsageAgreeState,
  action: ActionType
): UsageAgreeState {
  switch (action.type) {
    case USAGE_ACTION_KIND.TOGGLE:
      return {
        ...state,
        [action.payload.name]: !state[action.payload.name],
      }
    case USAGE_ACTION_KIND.TOGGLE_ALL:
      return {
        usage: true,
        privacy: true,
        location: true,
        marketing: true,
        adult: true,
      }
    default:
      return state
  }
}

type LoginContextType = {
  state: UsageAgreeState
  dispatch: React.Dispatch<ActionType>
}

// Context 생성
const UsageAgreeContext = createContext<LoginContextType | undefined>(undefined)

// Context Provider 생성
export function UsageAgreeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [state, dispatch] = useReducer(loginPageReducer, initialState)

  return (
    <UsageAgreeContext.Provider value={{ state: state, dispatch }}>
      {children}
    </UsageAgreeContext.Provider>
  )
}

// Context를 쉽게 사용하기 위한 커스텀 훅
export function useUsageAgreeContext() {
  const context = useContext(UsageAgreeContext)
  if (!context) {
    throw new Error('useInputContext must be used within an InputProvider')
  }
  return context
}

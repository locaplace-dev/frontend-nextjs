'use client'
import TextField from '@/app/web/components/common/TextField'
import { validateEmail, validatePassword } from '@/app/utils/validator'
import { useState } from 'react'
import { LOGIN_ACTION_KIND, useLoginContext } from '../provider'
export function RegisterForm() {
  const { state, dispatch } = useLoginContext()

  // 이메일 유효성 검사
  const handleEmailChange = (value: string) => {
    dispatch({
      type: LOGIN_ACTION_KIND.INPUT,
      payload: {
        value: value,
        name: 'email',
      },
    })

    if (value && !validateEmail(value)) {
      dispatch({
        type: LOGIN_ACTION_KIND.ERROR,
        payload: {
          value: '올바르지 않은 이메일 형식입니다',
          name: 'emailError',
        },
      })
    } else {
      dispatch({
        type: LOGIN_ACTION_KIND.ERROR,
        payload: {
          value: '',
          name: 'emailError',
        },
      })
    }
  }
  // 비밀번호 유효성 검사
  const handlePasswordChange = (value: string) => {
    dispatch({
      type: LOGIN_ACTION_KIND.INPUT,
      payload: {
        value: value,
        name: 'password',
      },
    })

    if (value && !validatePassword(value)) {
      dispatch({
        type: LOGIN_ACTION_KIND.ERROR,
        payload: {
          value: '비밀번호는 8자리 이상, 숫자와 특수문자를 포함해야 합니다',
          name: 'passwordError',
        },
      })
    } else {
      dispatch({
        type: LOGIN_ACTION_KIND.ERROR,
        payload: {
          value: '',
          name: 'passwordError',
        },
      })
    }
  }

  const handlePasswordCheckChange = (value: string) => {
    dispatch({
      type: LOGIN_ACTION_KIND.INPUT,
      payload: {
        value: value,
        name: 'passwordCheck',
      },
    })

    if (value && state.password != value) {
      dispatch({
        type: LOGIN_ACTION_KIND.ERROR,
        payload: {
          value: '비밀번호가 일치하지 않습니다.',
          name: 'passwordCheckError',
        },
      })
    } else {
      dispatch({
        type: LOGIN_ACTION_KIND.ERROR,
        payload: {
          value: '',
          name: 'passwordCheckError',
        },
      })
    }
  }
  return (
    <div>
      <TextField
        type="email"
        label="이메일"
        value={state.email}
        onChange={handleEmailChange}
        error={state.emailError}
      />
      <TextField
        type="password"
        label="비밀번호"
        value={state.password}
        onChange={handlePasswordChange}
        error={state.passwordError}
      />
      <TextField
        type="password"
        label="비밀번호 확인"
        value={state.passwordCheck}
        onChange={handlePasswordCheckChange}
        error={state.passwordCheckError}
      />
    </div>
  )
}

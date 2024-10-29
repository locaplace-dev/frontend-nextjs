'use client'
import {
  AppRouterInstance,
  NavigateOptions,
} from 'next/dist/shared/lib/app-router-context.shared-runtime'
// import { useNavigate, Link } from 'react-router-dom';
import Link, { LinkProps } from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const isWebview = () => {
  if (typeof window === 'undefined') return false // 서버사이드에서는 판단할 수 없음
  const userAgent = navigator.userAgent || navigator.vendor || window.opera

  // Android WebView 체크
  const isAndroidWebView = /wv/.test(userAgent) && /Android/.test(userAgent)

  // iOS WebView 체크
  const isIOSWebView =
    /iPhone|iPod|iPad/.test(userAgent) && !/Safari/.test(userAgent)

  return isAndroidWebView || isIOSWebView
}

// WebView 에서는 useNavigate 대신 브릿지 호출하는 함수를 반환합니다.
export function useCustomNavigate() {
  if (isWebview()) {
    return {
      back() {},
      push(href: string, options?: NavigateOptions) {
        window.bridge.postMessage('router:push', {
          viewType: 'default',
          url: href,
        })
      },
      forward() {},
      refresh() {},
      replace(href: string, options?: NavigateOptions) {},
      prefetch(href: string, options?: NavigateOptions) {},
    }
  } else {
    return useRouter()
  }
}

interface CustomLinkProp extends LinkProps {
  href: string
  className: string
  children: React.ReactNode
}

// WebView 에서는 <Link> 컴포넌트 대신 브릿지 호출 클릭 핸들러가 있는 <a> 태그로 반환합니다.
export const CustomLink = ({
  href,
  className,
  children,
  ...rest
}: CustomLinkProp) => {
  if (isWebview()) {
    return (
      <div
        onClick={(event) => {
          console.log('fuck')
          event.preventDefault()
          window.bridge.postMessage('router:push', {
            viewType: 'default',
            url: href,
          })
        }}
      >
        {children}
      </div>
    )
  } else {
    return (
      <Link
        href={href}
        {...rest}
        onClick={() => {
          console.log('fuck')
        }}
      >
        {children}
      </Link>
    )
  }
}

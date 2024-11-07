export interface SocialLoginProps {
  key: string
  provider: string
}

const onClick = (provider: string) => {
  const body: SocialLoginProps = {
    key: 'social:login',
    provider: provider,
  }
  window.bridge.postMessage(JSON.stringify(body))
}

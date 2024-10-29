import { MyPageOptions } from './components/MyPageOptions'
import SwitchHostAndUseBtn from './components/SwitchHostAndUserBtn'
import UserCertificationStep from './components/UserCertificationStep'
import UserSummary from './components/UserSummary'

export default function Mypage() {
  return (
    <div>
      <UserSummary />
      <UserCertificationStep />
      <MyPageOptions />
      <div className="h-4" />
      <SwitchHostAndUseBtn />
    </div>
  )
}

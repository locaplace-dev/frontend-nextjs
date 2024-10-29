import Divider from '@/app/web/components/common/Divider'
import UserInformation from './components/UserInformation'
import ProfileOptions from './components/ProfileOptions'

export default function MyProfile() {
  return (
    <div>
      <UserInformation />
      <Divider />
      <ProfileOptions />
    </div>
  )
}

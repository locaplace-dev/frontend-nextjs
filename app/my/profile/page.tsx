import Divider from '@/app/ui/common/Divider'
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

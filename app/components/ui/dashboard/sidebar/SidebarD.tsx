// DATA MENUS TITLES,ICONS...
import { SIDEBAR_MENUS, USERS_INFO } from '@/app/data/constants'
import UserSide from './UserSide'

export default function SidebarD() {
  console.log(USERS_INFO[0])
  return (
    <div className="sticky top-10">
      {
        USERS_INFO.map(item => (
          <UserSide key={item.title} user={item.list} />
        ))
      }
    </div>
  )
}

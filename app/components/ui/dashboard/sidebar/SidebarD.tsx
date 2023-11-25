// DATA MENUS TITLES,ICONS...
import { USERS_INFO } from '@/app/data/constants';
import UserSide from './UserSide';
import MenuLink from './MenuLink';

import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";


export default function SidebarD() {

  const menuItems = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Users",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Products",
          path: "/dashboard/products",
          icon: <MdShoppingBag />,
        },
        {
          title: "Transactions",
          path: "/dashboard/transactions",
          icon: <MdAttachMoney />,
        },
      ],
    },
    {
      title: "Analytics",
      list: [
        {
          title: "Revenue",
          path: "/dashboard/revenue",
          icon: <MdWork />,
        },
        {
          title: "Reports",
          path: "/dashboard/reports",
          icon: <MdAnalytics />,
        },
        {
          title: "Teams",
          path: "/dashboard/teams",
          icon: <MdPeople />,
        },
      ],
    },
  ];

  return (
    <div className="flex-start flex-col gap-y-5 bg-slate-800 p-5 min-h-screen sticky top-10">
      <div className='ps-1'>
        {USERS_INFO.map(item => (
          <UserSide key={item.title} user={item} />
        ))}
      </div>
      <ul className='flex-start flex-col'>
        {menuItems.map(items => (
          <li className='flex-start flex-col' key={items.title}>
            <span className="flex-start text-xs pt-5 pb-2 ps-1">
              {items.title}
            </span>
              {items.list.map(item => (
                <MenuLink item={item} key={item.title} />
              ))}
          </li>
        ))}
      </ul>
      <button className="flex-start !items-center gap-x-1 text-md w-56 rounded-sm py-3 ps-1 hover:bg-slate-600 hover:cursor-pointer">
        <MdLogout />
        Logout
      </button>
    </div>
  )
}

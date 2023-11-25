"use client"

import { usePathname } from "next/navigation"
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
} from "react-icons/md";

export default function NavbarD() {

  const pathname = usePathname()

  return (
    <div className="flex justify-center flex-col w-full text-slate-200 bg-slate-800 p-5 rounded-md">
      <div className="flex-between">
        <h4 className="capitalize font-semibold">
          {pathname.split('/').pop()}
        </h4>
        <div className="flex-center gap-x-5">
          <div className="flex-center gap-x-5">
            <MdSearch />
            <input className="p-1" type="text" placeholder="Search..." />
          </div>
          <div className="flex-start">
            <MdOutlineChat size={20} />
            <MdNotifications size={20} />
            <MdPublic size={20} />
          </div>
        </div>
      </div>
    </div>
  )
}

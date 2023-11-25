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
          <div className="flex-center bg-gray-900 px-1 py-2 rounded-md">
            <input className="w-full rounded-sm bg-transparent outline-none" type="text" placeholder=" Search..." />
            <MdSearch size={30} />
            <span className="flex-center absolute top-0 right-0 p-1 h-full hover:cursor-pointer rounded-r-sm bg-slate-900">
            </span>
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

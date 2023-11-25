"use client"

import Link from "next/link";
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
          <div className="flex-center bg-gray-900 px-1 py-2 rounded-md focus-within:border-blue-500 focus-within:ring focus-within:ring-blue-200 focus-within:ring-opacity-50">
            <input className="w-full rounded-sm bg-transparent outline-none" type="text" placeholder=" Search..." />
            <MdSearch size={30} className="cursor-pointer" />
          </div>
          <div className="flex-start gap-x-5">
            <Link href={''}>
              <MdOutlineChat size={20} />
            </Link>
            <Link href={''}>
              <MdNotifications size={20} />
            </Link>
            <Link href={''}>
              <MdPublic size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

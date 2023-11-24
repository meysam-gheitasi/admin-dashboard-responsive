"use client"

import { usePathname } from "next/navigation"

export default function NavbarD() {

  const pathname = usePathname()

  return (
    <div className="flex justify-center flex-col w-full text-slate-200 bg-slate-800 p-5">
      <div className="flex-between">
        <h4>
          {pathname.split('/').pop()}
        </h4>
        <input />
      </div>
    </div>
  )
}

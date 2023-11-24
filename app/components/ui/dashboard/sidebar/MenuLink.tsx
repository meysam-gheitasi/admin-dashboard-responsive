"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MenuLink({ item }) {

    const pathname = usePathname()

    return (
        <Link href={item.path} className={`flex-start !items-center  gap-x-1 w-56 !text-md hover:bg-slate-600 rounded-sm py-3 ps-1 ${pathname === item.path && `text-slate-500 hover:bg-inherit hover:cursor-default`}`}>
            <span>
                {item.icon}
            </span>
            <span>
                {item.title}
            </span>
        </Link>
    )
}

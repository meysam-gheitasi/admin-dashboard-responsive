import Link from "next/link"


export default function MenuLink({ item }) {

    return (
        <Link href={item.path} className={`flex-start !items-center gap-x-1 !text-md `}>
            <span className="">
                {item.icon}
            </span>
            <span>
                {item.title}
            </span>
        </Link>
    )
}

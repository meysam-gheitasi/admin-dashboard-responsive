import Image from "next/image";

export default function UserSide({ user }) {

    console.log(user)

  return (
    <div className="flex-center gap-5">
        <Image className="rounded-full object-contain" alt="Users Image" src={user.img || user.image } width={50} height={50} />
        <div className="flex-center flex-col">
            <span className="text-sm font-medium">
                {
                    user.name
                }
            </span>
            <span className="text-xs text-slate-400">
                {
                    user.title
                }
            </span>
        </div>
    </div>
  )
}

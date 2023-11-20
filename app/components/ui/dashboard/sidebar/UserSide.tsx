import Image from "next/image";

export default function UserSide({ user }) {
    console.log(user)
    
  return (
    <div className="flex-center gap-5">
        
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

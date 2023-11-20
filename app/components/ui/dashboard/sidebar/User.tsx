import Image from "next/image";

export default function User({ user }) {
  return (
    <div className="flex-center gap-5">
        <Image alt="Users Image" src={user.img || } />
    </div>
  )
}

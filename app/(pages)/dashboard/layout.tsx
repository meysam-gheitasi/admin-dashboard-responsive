import NavbarD from "@/app/components/ui/dashboard/navbar/NavbarD";
import SidebarD from "@/app/components/ui/dashboard/sidebar/SidebarD";


export default function layout({ children }) {
  return (
    <div className="flex-center">
        <div className="flex-1 bg-slate-800 p-5 min-h-screen">
            <SidebarD />
        </div>
        <div className="flex-between flex-col flex-4 p-5">
            <NavbarD />
            {children}
        </div>
    </div>
  )
}

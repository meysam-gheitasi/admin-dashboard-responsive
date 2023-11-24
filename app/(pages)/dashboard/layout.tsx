import NavbarD from "@/app/components/ui/dashboard/navbar/NavbarD";
import SidebarD from "@/app/components/ui/dashboard/sidebar/SidebarD";


export default function layout({ children }) {
  return (
    <div className="flex-start !justify-center">
        <div className="flex-1">
            <SidebarD />
        </div>
        <div className="flex-start !justify-center flex-col flex-4 p-5">
            <NavbarD />
            {children}
        </div>
    </div>
  )
}

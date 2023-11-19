import NavbarD from "@/app/components/ui/dashboard/navbar/NavbarD";
import SidebarD from "@/app/components/ui/dashboard/sidebar/SidebarD";


export default function layout({ children }) {
  return (
    <div>
        <div className="">
            <SidebarD />
        </div>
        <div className="">
            <div>
            <NavbarD />
            </div>
            <div className="">
                {children}
            </div>
        </div>
    </div>
  )
}

export const USERS_INFO = [
    {
        title: 'Administrator',
        image: '/images/noavatar.png',
        name: 'Test',
    }
]
export const SIDEBAR_MENUS = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: "<MdDashboard />",
            },
            {
                title: "Users",
                path: "/dashboard/users",
                icon: "<MdSupervisedUserCircle />",
            },
            {
                title: "Products",
                path: "/dashboard/products",
                icon: "<MdShoppingBag />",
            },
            {
                title: "Transactions",
                path: "/dashboard/transactions",
                icon: "<MdAttachMoney />",
            },
        ],
    },
    {
        title: "Analytics",
        list: [
            {
                title: "Revenue",
                path: "/dashboard/revenue",
                icon: "<MdWork />",
            },
            {
                title: "Reports",
                path: "/dashboard/reports",
                icon: "<MdAnalytics />",
            },
            {
                title: "Teams",
                path: "/dashboard/teams",
                icon: "<MdPeople />",
            },
        ],
    },
    {
        title: "User",
        list: [
            {
                title: "Settings",
                path: "/dashboard/settings",
                icon: "<MdOutlineSettings />",
            },
            {
                title: "Help",
                path: "/dashboard/help",
                icon: "<MdHelpCenter />",
            },
        ],
    },
];

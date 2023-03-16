import React from 'react'
import { ChatBubbleBottomCenterIcon, CogIcon, AcademicCapIcon, ShoppingCartIcon, TicketIcon, UserIcon } from "@heroicons/react/24/outline";

const navLinks = [
    // {
    //     id: 0,
    //     title: "Dashboard",
    //     icon: <TicketIcon className="nav-icon" />,
    // },
    // {
    //     id: 1,
    //     title: "Market",
    //     icon: <ShoppingCartIcon className="nav-icon" />,
    // },
    // {
    //     id: 2,
    //     title: "Portfolio",
    //     icon: <UserIcon className="nav-icon" />,
    // },
    // {
    //     id: 3,
    //     title: "News",
    //     icon: <ChatBubbleBottomCenterIcon className="nav-icon" />,
    // },
    // {
    //     id: 4,
    //     title: "Settings",
    //     icon: <CogIcon className="nav-icon" />,
    // },
    // {
    //     id: 5,
    //     title: "LogOut",
    //     icon: <AcademicCapIcon className="nav-icon" />,
    // },
];

function NavBar() {
    return (
        <nav className="col-span-2 border-r border-gray-200 min-h-[90vh] w-[80px] xl:w-[250px] pt-8 px-1 flex flex-col items-start justify-between">
            <div className="space-y-8 w-full ">
                {navLinks.slice(0, 4).map((link) => (
                    <NavItem link={link} key={link.id} />
                ))}
                <div className="w-full border-t border-gray-200" />
                {navLinks.slice(4, 6).map((link) => (
                    <NavItem link={link} key={link.id} />
                ))}
            </div>
            {/* <div className="xl:flex flex-col hidden  items-center justify-center space-y-4 px-4 py-4 ">
                <h1 className="text-xl w-full font-medium">
                    Grow Your <br /> Saving Now!
                </h1>
                <p> Pick an investment strategy that reflexts your goals </p>
                <button className=" w-full py-2 px-3 bg-black text-white">
                    Become a Pro
                </button>
            </div> */}
        </nav>
    );
}

function NavItem({ link }) {
    return (
        <div
            // onClick={() => setActiveNav(link.id)}
            key={link.id}
            className={`w-full flex items-center justify-start space-x-8 px-5 cursor-pointer
         group hover:border-gray-900 border-l-4 border-transparent `}
        >
            <span> {link.icon}</span>
            <h1
                className={`text-gray-600 group-hover:text-black xl:flex hidden } `}
            >
                {link.title}
            </h1>
        </div>
    );
}

export default NavBar;
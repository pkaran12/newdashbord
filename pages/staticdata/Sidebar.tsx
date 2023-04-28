import React, { useState } from "react";
import WindowIcon from '@mui/icons-material/Window';
import Link from "next/link";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

interface SidebarItem {
    link: string;
    title: string;
    icon: any;
}

const sidebarData: SidebarItem[] = [
    {
        link: "/home",
        title: "Home",
        icon: <WindowIcon />
    },
    {
        link: "/section1",
        title: "Section 1",
        icon: <WindowIcon />
    },
    {
        link: "/section2",
        title: "section 2",
        icon: <WindowIcon />
    },
    {
        link: "/section3",
        title: "section 3",
        icon: <WindowIcon />
    },
    {
        link: "/section4",
        title: "Section 4",
        icon: <WindowIcon />
    },
    {
        link: "/section5",
        title: "Section 5",
        icon: <WindowIcon />
    },
    {
        link: "/section6",
        title: "Section 6",
        icon: <WindowIcon />
    },
    {
        link: "/section7",
        title: "Section 7",
        icon: <WindowIcon />
    },
    {
        link: "/section8",
        title: "Section 8",
        icon: <WindowIcon />
    },
    {
        link: "/documentation",
        title: "Documentation",
        icon: <WindowIcon />
    },
];

const Sidebar: React.FC = () => {

    const [show, setShow] = useState(true)

    const handleClick = () => {
        setShow(false)
    }

    return (
        show &&
        <div className="sidebar bg-[#000000] text-white h-[100vh] w-[18vw] flex flex-col justify-center items-center gap-6 ">
            <div className="flex justify-center gap-8 items-center">
                <span className="flex items-center gap-2"><h1 className="bg-[#3772ff] px-3 py-1 rounded-full">N</h1><p className="text-2xl font-bold">Name</p></span>
                <span className="text-2xl font-extrabold" onClick={handleClick}><KeyboardBackspaceIcon /></span>
            </div>
            {sidebarData.map((item) => (
                <div className="sidebar-item w-[150px] ">
                    <Link href={item.link} key={item.link} className="cursor-pointer">
                        <i className="pr-3">{item.icon}</i>
                        <span >{item.title}</span>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Sidebar;
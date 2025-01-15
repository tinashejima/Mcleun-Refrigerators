import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';


export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },

    {
        title: 'Services',
        path: '/Services',
        icon: <FaIcons.FaTools />,
        cName: 'nav-text'
    },

    {
        title: 'Target Market',
        path: '/Target-market',
        icon: <FaIcons.FaBeer />,
        cName: 'nav-text'
    },

    {
        title: 'Contact Info',
        path: '/Contact',
        icon: <FaIcons.FaPhone />,
        cName: 'nav-text'
    }
]
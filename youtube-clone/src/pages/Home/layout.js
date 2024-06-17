import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Sidebar from '../Sidebar/Sidebar'
import { useState } from 'react'
import MainPage from '../Content/mainpage'

export default function HomeLayout() {

    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <Navbar toggleSidebar={toggleSidebar} />
            <div className='flex'>
                <Sidebar isOpen={isOpen}/>
                <MainPage isOpen={isOpen}/>
            </div>
        </>
    )
}

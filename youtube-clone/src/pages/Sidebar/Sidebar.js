import React, { useState } from 'react'
import SidebarClose from './SidebarClose'
import SidebarOpen from './SidebarOpen'




export default function Sidebar({ isOpen }) {

  return (
    isOpen  ?  <SidebarClose /> : <SidebarOpen />

  )
}

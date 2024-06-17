import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from '../../icons'

export default function SidebarClose() {
  return (
      <div className={'h-full w-[65px] flex-shrink-0 items-center flex-col flex justify-center mt-[4.20rem] z-20 '}>
          <div className=' overflow-hidden whitespace-nowrap'>

              <NavLink to='mainpage' className={({ isActive }) => isActive ? 'px-2 rounded-lg h-20 bg-zinc-100 flex flex-col justify-center items-center' : 'px-2 rounded-lg h-20 flex flex-col justify-center items-center hover:bg-zinc-100 bg-white'}>
                  <Icon name='home' />
                  <p className='text-xs'>Ana sayfa</p>
              </NavLink>
              <NavLink to='shorts' className={({ isActive }) => isActive ? 'px-2  rounded-lg h-20 bg-zinc-100 flex flex-col justify-center items-center' : 'px-2 rounded-lg h-20 flex flex-col justify-center items-center hover:bg-zinc-100 bg-white'}>
                  <Icon name='shorts' />
                  <p className='text-xs'>Shorts</p>
              </NavLink>
              <NavLink to='subscription' className={({ isActive }) => isActive ? 'px-2 rounded-lg h-20 bg-zinc-100 flex flex-col justify-center items-center' : 'px-2 rounded-lg h-20 flex flex-col justify-center items-center hover:bg-zinc-100 bg-white'}>
                  <Icon name='subscription' />
                  <p className='text-xs'>Abonelikler</p>
              </NavLink>
              <NavLink to='/' className={({ isActive }) => isActive ? 'px-2 rounded-lg h-20 bg-zinc-100 flex flex-col justify-center items-center' : 'px-2 rounded-lg h-20 flex flex-col justify-center items-center hover:bg-zinc-100 bg-white'}>
                  <Icon name='subscription' />
                  <div className="flex items-center gap-x-2 font-bold">
                      <p className='text-xs'>Siz</p>
                  </div>
              </NavLink>
          </div>
      </div> 
  )
}

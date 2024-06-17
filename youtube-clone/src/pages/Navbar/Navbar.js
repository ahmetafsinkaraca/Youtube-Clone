import React, { useState } from 'react'
import { Icon } from '../../icons'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import TopPart from './NavPart'
import Auth from './Auth.js'


export default function Navbar({ toggleSidebar }) {

  const [search, setSearch] = useState(true)

return (

    <div className='fixed w-full z-10 bg-white'>
      <div className='flex justify-between items-center py-3 px-6'>
        <div className='flex items-center justify-center gap-x-5'>
          <button onClick={toggleSidebar}>
            <Icon name='choices' />
          </button>
          <NavLink to='/'>
            <label className=' cursor-pointer'><Icon name='logo' /></label>
          </NavLink>
        </div>

        
        <form className='flex gap-4 flex-grow justify-center'>
          <div className='flex flex-grow max-w-[650px]'>
          <span className={classNames({
                'hidden': true,
                'items-center ml-2 w-10 h-10 translate-y-3/2 !flex z-30 absolute': search
              })}>
                <Icon name='search' />
              </span>
              <input onClick={() => setSearch(true)} onBlur={() => setSearch(false)} type='search' placeholder='Ara' className={classNames({
                'md:flex hidden border-2 w-full h-10 rounded-l-full py-1 outline-blue-900 px-2 ': true,
                'px-9': search
              })} />
              <button className={`md:bg-zinc-100 md:border w-16 rounded-r-full h-10 px-4 py-2 `}> <Icon name='search' /> </button>
          </div>

          <button className={classNames({
            ' bg-zinc-100 border rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0': true,
            '': search
          })}>
            <Icon name='microphone' />
          </button>
        </form>


        <div className='flex items-center justify-center gap-x-5 px-5 flex-shrink-0'>
          <NavLink to='#'>
          <button><Icon name='camera' /></button>
        </NavLink>
        <NavLink to='#'>
          <button><Icon name='notification' /></button>
        </NavLink>
          <Auth/>
      </div>
      </div>

      <div className='fixed pl-64 bg-white pb-3 w-full '>
        <TopPart />
      </div>
    </div>


  )
}







/* border-secondary border-shadow-inner shadow-secondary */
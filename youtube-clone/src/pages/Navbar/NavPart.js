import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function TopPart() {

    return (
        <div className=' gap-x-5 md:flex hidden pl-30'>
            <NavLink to='/' className={({isActive}) => isActive ? 'text-white bg-black border rounded-lg h-[32px] w-[60px]  items-center justify-center flex' : 'text-black hover:bg-zinc-200 bg-zinc-50 border rounded-lg h-[32px] w-[60px]  items-center justify-center flex'}>
              <p className='font-semibold text-[14px]'>Tümü</p>
            </NavLink>

            <NavLink to='/' className={({isActive}) => isActive ? 'text-white bg-black border rounded-lg h-[32px] w-[60px]  items-center justify-center flex' : 'text-black hover:bg-zinc-200 bg-zinc-50 border rounded-lg h-[32px] w-[60px]  items-center justify-center flex'}>
            <p className='font-semibold text-[14px]'>Mix'ler</p>
            </NavLink>

            <NavLink to='/' className={({isActive}) => isActive ? 'text-white bg-black border rounded-lg h-[32px] w-[60px]  items-center justify-center flex' : 'text-black hover:bg-zinc-200 bg-zinc-50 border rounded-lg h-[32px] w-[60px]  items-center justify-center flex'}>
            <p className='font-semibold text-[14px]'>Müzik</p>
            </NavLink>

            <NavLink to='/' className={({isActive}) => isActive ? 'text-white bg-black border rounded-lg h-[32px] w-[60px]  items-center justify-center flex' : 'text-black hover:bg-zinc-200 bg-zinc-50 border rounded-lg h-[32px] w-[60px]  items-center justify-center flex'}>
            <p className='font-semibold text-[14px]'>Canlı</p>
            </NavLink>

            <NavLink to='/' className={({isActive}) => isActive ? 'text-white bg-black border rounded-lg h-[32px] w-[60px]  items-center justify-center flex' : 'text-black hover:bg-zinc-200 bg-zinc-50 border rounded-lg h-[32px] w-[60px]  items-center justify-center flex'}>
            <p className='font-semibold text-[14px]'>Oyun</p>
            </NavLink>
        
            <NavLink to='/' className={({isActive}) => isActive ? 'text-white bg-black border rounded-lg h-[32px] w-[120px]  items-center justify-center flex' : 'text-black hover:bg-zinc-200 bg-zinc-50 border rounded-lg h-[32px] w-[120px]  items-center justify-center flex'}>
            <p className='font-semibold text-[14px]'>Son yüklenenler</p>
            </NavLink>

            <NavLink to='/' className={({isActive}) => isActive ? 'text-white bg-black border rounded-lg h-[32px] w-[80px]  items-center justify-center flex' : 'text-black hover:bg-zinc-200 bg-zinc-50 border rounded-lg h-[32px] w-[80px]  items-center justify-center flex'}>
            <p className='font-semibold text-[14px]'>İzlenenler</p>
            </NavLink>

            <NavLink to='/' className={({isActive}) => isActive ? 'text-white bg-black border rounded-lg h-[32px] w-[100px]  items-center justify-center flex' : 'text-black hover:bg-zinc-200 bg-zinc-50 border rounded-lg h-[32px] w-[100px]  items-center justify-center flex'}>
            <p className='font-semibold text-[14px]'>Yeni öneriler</p>
            </NavLink>


        </div>
    )
}

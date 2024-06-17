import React from 'react'
import { NavLink } from "react-router-dom"


export default function SongItemOpen({item}) {
  return (
    <NavLink key={item.id} to='/' className='rounded-lg gap-x-2'>
      <div className="">
        <img src={item.image} className="object-cover w-baseImage h-44 rounded-lg" />
      </div>
      
      <div className="flex items-center gap-x-3 py-2 whitespace-nowrap overflow-ellipsis overflow-hidden">
        <div className="flex items-center pb-9 gap-x-4">
          <img src={item.image} className="w-8 rounded-full" />
        </div>
        <div className="items-center flex-col truncate">
          <h3 className="font-semibold text-lg whitespace-nowrap overflow-ellipsis overflow-hidden">{item.title}</h3>
          <h3 className="">{item.title}</h3>
          <div className="flex items-center gap-x-2">
            <p className="text-sm">{item.view} görüntüleme</p>
            <p className="relative before:w-[3px] before:h-[3px] before:bg-black before:absolute before:top-1/2 before:-translate-y-1/2 before:rounded-full"></p>
            <p>{item.date}</p>
          </div>
        </div>
      </div>  
    </NavLink> 
  )
}

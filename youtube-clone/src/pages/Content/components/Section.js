import React from 'react'
import SongItemClose from './SongItemClose'
import SongItemOpen from './SongItemOpen'

export default function Section({items, isOpen}) {
  return (

    <section>
      <div className='grid xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-x-3 gap-y-8 '>
        {isOpen && items && items.map((item) => (
          <SongItemClose item={item} key={item.id} />
        ))}
        {!isOpen && items && items.map((item) => (
          <SongItemOpen item={item} key={item.id} />
        ))}
      </div>
    </section>

  )
}



{/* <img key={key} className='w-40 h-45' src={item.image}/>
<p className=''>{item.title}</p> */}


{/*       <header className='flex items-center justify-center py-4 '>
        <NavLink to='/'>
          <h3 className=''>{title}</h3>
        </NavLink>
      </header> */}
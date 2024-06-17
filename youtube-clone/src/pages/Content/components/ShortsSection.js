import { NavLink } from "react-router-dom"
import shorts from "../../../data/shorts"
import { Icon } from "../../../icons"

export default function ShortsSection() {
  return (

<>
      <header className='flex items-center justify-center'>
        <NavLink to='/'>
          <Icon name='shortsMain'/>
          <h3 className=''>{shorts[1].title}</h3>
        </NavLink>
      </header>

    <NavLink to='/' className='rounded-lg gap-x-2'>
        <div className="flex">
        <img src={shorts[1].image} className="object-cover w-56 h-96 rounded-lg" />
      </div>
    </NavLink>
    </>

  )
}


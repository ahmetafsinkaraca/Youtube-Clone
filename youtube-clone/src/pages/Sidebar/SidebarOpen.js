import React from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from '../../icons'
import Seperator from '../../components/Seperator'
import user from '../../data/user'

export default function SidebarOpen() {
  return (
<div className={'h-full hover:overflow-auto scrollbar-thin scrollbar-thumb-gray-900 pr-2 flex-shrink-0 fixed mt-[4.20rem] z-20'}>
<div className='w-[230px] flex-col px-2 pl-6 overflow-hidden whitespace-nowrap'>

    <NavLink to='mainpage' className={({isActive}) => isActive ? 'rounded-lg flex gap-x-6 h-10 justify-start items-center bg-zinc-100': 'rounded-lg  flex gap-x-6 h-10 justify-start items-center hover:bg-zinc-100 bg-white'}>
      <Icon name='home' />
      <p >Ana sayfa</p>
    </NavLink>
    <NavLink to='shorts' className={({isActive}) => isActive ? 'rounded-lg  flex gap-x-6  h-10 justify-start items-center bg-zinc-100': 'rounded-lg  flex gap-x-6 h-10 justify-start items-center hover:bg-zinc-100 bg-white'}>
      <Icon name='shorts' />
      <p>Shorts</p>
    </NavLink>
    <NavLink to='subscription' className={({isActive}) => isActive ? 'rounded-lg  flex gap-x-6 h-10 justify-start items-center bg-zinc-100': 'rounded-lg  flex gap-x-6 h-10 justify-start items-center hover:bg-zinc-100 bg-white'}>
      <Icon name='subscription' />
      <p>Abonelikler</p>
    </NavLink>

    <Seperator/>

  <header>
    <NavLink to='/' className={({ isActive }) => isActive ? 'rounded-lg  flex gap-x-6 h-10 justify-start items-center bg-zinc-100' : 'rounded-lg flex gap-x-6 h-10 justify-start items-center hover:bg-zinc-100 bg-white'}>
      <div className="flex items-center gap-x-2 font-bold">
        <p>Siz</p>
        <span>&gt;</span>
      </div>          
    </NavLink>
  </header>
  <NavLink to='/' className={({ isActive }) => isActive ? 'rounded-lg  flex gap-x-6 h-10 justify-start items-center bg-zinc-100' : 'rounded-lg flex gap-x-6 h-10 justify-start items-center hover:bg-zinc-100 bg-white'}>
    <Icon name='previous' />
      <p>Geçmiş</p>
    </NavLink>
    <NavLink to='#' className={({isActive}) => isActive ? 'rounded-lg  flex gap-x-6 h-10 justify-start items-center bg-zinc-100': 'rounded-lg  flex gap-x-6 h-10 justify-start items-center hover:bg-zinc-100 bg-white'}>
      <Icon name='watchafter' />
      <p>Daha sonra izle</p>
    </NavLink>
    <NavLink to='#' className={({isActive}) => isActive ? 'rounded-lg  flex gap-x-6 h-10 justify-start items-center bg-zinc-100': 'rounded-lg  flex gap-x-6 h-10 justify-start items-center hover:bg-zinc-100 bg-white'}>
      <Icon name='likedvideos' />
      <p>Beğendiğim videolar</p>
    </NavLink>

  <Seperator />

  <header className='font-bold text-md py-1'>Abonelikler</header>
  <NavLink to='#' className={({ isActive }) => isActive ? 'rounded-lg  flex gap-x-6 h-10 justify-start items-center bg-zinc-100' : 'rounded-lg flex gap-x-6 h-10 justify-start items-center hover:bg-zinc-100 bg-white'}>
    <img src={user[1].image} height={24} width={24} className='rounded-full' />
    <p className=' font-semibold text-md' >{user[1].title}</p>
  </NavLink>
  <NavLink to='#' className={({ isActive }) => isActive ? 'rounded-lg  flex gap-x-6 h-10 justify-start items-center bg-zinc-100' : 'rounded-lg  flex gap-x-6 h-10 justify-start items-center hover:bg-zinc-100 bg-white'}>
    <Icon name='channels' />
    <p>Kanallara göz at</p>
  </NavLink>

  <Seperator />

  <header className='font-bold text-md py-1'>Keşfet</header>
  <NavLink to='#' className={({ isActive }) => isActive ? 'rounded-lg  flex gap-x-6 h-10 justify-start items-center bg-zinc-100' : 'rounded-lg flex gap-x-6 h-10 justify-start items-center hover:bg-zinc-100 bg-white'}>
    <Icon name='trends' />
    <p>Trendler</p>
  </NavLink>
  <NavLink to='#' className={({ isActive }) => isActive ? 'rounded-lg  flex gap-x-6 h-10 justify-start items-center bg-zinc-100' : 'rounded-lg  flex gap-x-6 h-10 justify-start items-center hover:bg-zinc-100 bg-white'}>
    <Icon name='music' />
    <p>Müzik</p>
  </NavLink>
  <NavLink to='#' className={({ isActive }) => isActive ? 'rounded-lg  flex gap-x-6 h-10 justify-start items-center bg-zinc-100' : 'rounded-lg  flex gap-x-6 h-10 justify-start items-center hover:bg-zinc-100 bg-white'}>
    <Icon name='live' />
    <p>Canlı</p>
  </NavLink>
  <NavLink to='#' className={({ isActive }) => isActive ? 'rounded-lg  flex gap-x-6 h-10 justify-start items-center bg-zinc-100' : 'rounded-lg  flex gap-x-6 h-10 justify-start items-center hover:bg-zinc-100 bg-white'}>
    <Icon name='game' />
    <p>Oyun</p>
  </NavLink>
  <NavLink to='#' className={({ isActive }) => isActive ? 'rounded-lg  flex gap-x-6 h-10 justify-start items-center bg-zinc-100' : 'rounded-lg  flex gap-x-6 h-10 justify-start items-center hover:bg-zinc-100 bg-white'}>
    <Icon name='sport' />
    <p>Spor</p>
  </NavLink>

  <Seperator/>

<header className='text-lg font-bold truncate'>YouTube'dan daha fazla içerik'</header>
<NavLink to='#' className={({ isActive }) => isActive ? 'rounded-lg  flex gap-x-6 h-10 justify-start items-center bg-zinc-100' : 'rounded-lg  flex gap-x-6 h-10 justify-start items-center hover:bg-zinc-100 bg-white'}>
    <Icon name='premium' />
    <p>YouTube Premium</p>
  </NavLink>
  <NavLink to='#' className={({ isActive }) => isActive ? 'rounded-lg  flex gap-x-6 h-10 justify-start items-center bg-zinc-100' : 'rounded-lg  flex gap-x-6 h-10 justify-start items-center hover:bg-zinc-100 bg-white'}>
    <Icon name='youtubemusic' />
    <p>YouTube Music</p>
  </NavLink>
  <NavLink to='#' className={({ isActive }) => isActive ? 'rounded-lg  flex gap-x-6 h-10 justify-start items-center bg-zinc-100' : 'rounded-lg  flex gap-x-6 h-10 justify-start items-center hover:bg-zinc-100 bg-white'}>
    <Icon name='youtubekids' />
    <p>YouTube Kids</p>
  </NavLink>

  <Seperator/>

  <NavLink to='#' className={({ isActive }) => isActive ? 'rounded-lg  flex gap-x-6 h-10 justify-start items-center bg-zinc-100' : 'rounded-lg  flex gap-x-6 h-10 justify-start items-center hover:bg-zinc-100 bg-white'}>
    <Icon name='setting' />
    <p>Ayarlar</p>
  </NavLink>
  <NavLink to='#' className={({ isActive }) => isActive ? 'rounded-lg  flex gap-x-6 h-10 justify-start items-center bg-zinc-100' : 'rounded-lg  flex gap-x-6 h-10 justify-start items-center hover:bg-zinc-100 bg-white'}>
    <Icon name='contain' />
    <p className='truncate'>İçerik bildirme geçmişi</p>
  </NavLink>
  <NavLink to='#' className={({ isActive }) => isActive ? 'rounded-lg  flex gap-x-6 h-10 justify-start items-center bg-zinc-100' : 'rounded-lg  flex gap-x-6 h-10 justify-start items-center hover:bg-zinc-100 bg-white'}>
    <Icon name='support' />
    <p>Yardım</p>
  </NavLink>
  <NavLink to='#' className={({ isActive }) => isActive ? 'rounded-lg  flex gap-x-6 h-10 justify-start items-center bg-zinc-100' : 'rounded-lg  flex gap-x-6 h-10 justify-start items-center hover:bg-zinc-100 bg-white'}>
    <Icon name='back' />
    <p>Geri bildirim gönder</p>
  </NavLink>

  <Seperator/>


  <NavLink to='#' className='rounded-lg my-6 flex gap-x-6 h-10 justify-start items-center bg-white'>
    <p className='text-[13.5px] font-[500px]'>Hakkında Basın Telif hakkı <br/>  Bize ulaşın İçerik Üreticiler <br/>  Reklam verme Geliştiriciler</p>
  </NavLink>
  <NavLink to='#' className='rounded-lg my-10 flex gap-x-6 h-10 justify-start items-center bg-white'>
    <p className='text-[13.5px] font-[500px]'>Şartlar Gizlilik <br/> Politika ve Güvenlik <br/>  YouTube Nasıl Çalışıyor? <br/> Yeni özellikleri deneyin</p>
  </NavLink>

  <div className='text-xs text-gray-700 flex gap-x-8 pb-4 mb-16'>
      &copy; 2024 Google LLC
    </div>
</div>
</div> 
  )
}

import React, { useState } from 'react'
import user from '../../data/user.js'
import { NavLink } from 'react-router-dom'
import { Icon } from '../../icons.js'

export default function Auth() {

    const [open, setOpen] = useState(false)

    const handleToggleDropdown = () => {
        setOpen(!open);
    }

    return (
        <div className='relative'>

            <button onClick={handleToggleDropdown} onBlur={() => setOpen(false)}><img src={user[1].image} className='w-7 rounded-full' /></button>

            {open && (
                <nav className=' absolute border bg-white w-[290px] h-[750px] right-0 rounded-lg z-30'>

                    <div className='flex items-center gap-x-4 px-4'>
                        <div className='flex items-center pb-7'>
                            <img src={user[1].image} className='w-10 rounded-full ' />
                        </div>
                        <div >
                            <p>{user[1].title}</p>
                            <p>{user[1].email}</p>
                            <button className='text-blue-300'>Kanal Oluştur</button>
                        </div>
                    </div>

                    <span className=' border h-0.5 bg-black text-black block my-2'></span>

                    <NavLink to='#' className='flex items-center py-1 px-2 gap-x-4 hover:bg-zinc-100'>
                        <Icon name='setting' size={26} />
                        <p className='text-sm'>Google Hesabı</p>
                    </NavLink>
                    <NavLink to='#' className='flex items-center py-2 px-2 gap-x-4 hover:bg-zinc-100'>
                        <Icon name='setting' size={26} />
                        <p className='text-sm'>Hesap değiştir</p>
                    </NavLink>
                    <NavLink to='#' className='flex items-center py-2 px-2 gap-x-4 hover:bg-zinc-100'>
                        <Icon name='setting' size={26} />
                        <p className='text-sm'>Oturumu kapat</p>
                    </NavLink>

                    <span className=' border h-0.5 bg-black text-black block my-2'></span>

                    <NavLink to='#' className='flex items-center py-2 px-2 gap-x-4 hover:bg-zinc-100'>
                        <Icon name='setting' size={26} />
                        <p className='text-sm'>YouTube Studio</p>
                    </NavLink>
                    <NavLink to='#' className='flex items-center py-2 px-2 gap-x-4 hover:bg-zinc-100'>
                        <Icon name='setting' size={26} />
                        <p className='text-sm'>Satın alınanlar ve üyelikler</p>
                    </NavLink>

                    <span className=' border h-0.5 bg-black text-black block my-2'></span>

                    <NavLink to='#' className='flex items-center py-2 px-2 gap-x-4 hover:bg-zinc-100'>
                        <Icon name='setting' size={26} />
                        <p className='text-sm'>YouTube'daki verileriniz</p>
                    </NavLink>
                    <NavLink to='#' className='flex items-center py-2 px-2 gap-x-4 hover:bg-zinc-100'>
                        <Icon name='setting' size={26} />
                        <p className='text-sm'>Görünüm: Açık</p>
                    </NavLink>
                    <NavLink to='#' className='flex items-center py-2 px-2 gap-x-4 hover:bg-zinc-100'>
                        <Icon name='setting' size={26} />
                        <p className='text-sm'>Dil: Türkçe</p>
                    </NavLink>
                    <NavLink to='#' className='flex items-center py-2 px-2 gap-x-4 hover:bg-zinc-100'>
                        <Icon name='setting' size={26} />
                        <p className='text-sm'>Kısıtlı Mod: Kapalı</p>
                    </NavLink>
                    <NavLink to='#' className='flex items-center py-2 px-2 gap-x-4 hover:bg-zinc-100'>
                        <Icon name='setting' size={26} />
                        <p className='text-sm'>Konum: Türkiye</p>
                    </NavLink>
                    <NavLink to='#' className='flex items-center py-2 px-2 gap-x-4 hover:bg-zinc-100'>
                        <Icon name='setting' size={26} />
                        <p className='text-sm'>Klavye kısayolları</p>
                    </NavLink>

                    <span className=' border h-0.5 bg-black text-black block my-2'></span>

                    <NavLink to='#' className='flex items-center py-1 px-2 gap-x-4 hover:bg-zinc-100'>
                        <Icon name='setting' size={26} />
                        <p className='text-sm'>Ayarlar</p>
                    </NavLink>

                    <span className=' border h-0.5 bg-black text-black block my-2'></span>

                    <NavLink to='#' className='flex items-center py-2 px-2 gap-x-4 hover:bg-zinc-100'>
                        <Icon name='setting' size={26} />
                        <p className='text-sm'>Yardım</p>
                    </NavLink>
                    <NavLink to='#' className='flex items-center py-2 px-2 gap-x-4 hover:bg-zinc-100'>
                        <Icon name='setting' size={26} />
                        <p className='text-sm'>Geri Bildirim Gönder</p>
                    </NavLink>
                </nav>
            )}

        </div>
    )
}









{/* <Menu as="nav" className={"relative"}>
<>
    <Menu.Button calssName={'h-8 flex items-center rounded-3xl'}>
        <img src={user[1].image} className='w-8 h-8 rounded-full' />
    </Menu.Button>

    <Menu.Items className={"absolute top-full bg-gray-500 right-1 flex-nowrap whitespace-nowrap"}>

        <Menu.Item className='flex items-center px-4'>
            <div>
                <span><img src={user[1].image} className='rounded-full w-10' /></span>
                <p>{user[1].title}</p>
            </div>
        </Menu.Item>

        <Seperator />

        <Menu.Item>
            {({ active }) => (
                <a
                    className={`flex items-center h-10 text-md font-semibold gap-x-6 px-5  ${active && 'bg-zinc-50'}`}
                    href='#'>
                    <span className=''><Icon name='setting' size={24} /></span>
                    <span className='flex items-center justify-center'>Google Hesabı
                    </span>
                </a>
            )}
        </Menu.Item>

        <Menu.Item>
            {({ active }) => (
                <a
                    className={`flex items-center justify-center h-10 text-md font-semibold gap-x-6 px-3  ${active && 'bg-zinv-50'}`}
                    href='#'>
                    <span className=''><Icon name='setting' size={24} /></span>
                    <span className='flex items-center justify-center'>Hesap değiştir
                    </span>
                </a>
            )}
        </Menu.Item>

        <Menu.Item>
            {({ active }) => (
                <a
                    className={`flex items-center justify-center h-10 text-md font-semibold gap-x-6 px-3  ${active && 'bg-zinv-50'}`}
                    href='#'>
                    <span className=''><Icon name='setting' size={24} /></span>
                    <span className='flex items-center justify-center'>Oturumu kapat
                    </span>
                </a>
            )}
        </Menu.Item>

        <Seperator />

        <Menu.Item>
            {({ active }) => (
                <a
                    className={`flex items-center justify-center h-10 text-md font-semibold gap-x-6 px-3  ${active && 'bg-zinv-50'}`}
                    href='#'>
                    <span className=''><Icon name='setting' size={24} /></span>
                    <span className='flex items-center justify-center'>YouTube Studio
                    </span>
                </a>
            )}
        </Menu.Item>

        <Menu.Item>
            {({ active }) => (
                <a
                    className={`flex items-center justify-center h-10 text-md font-semibold gap-x-6 px-3  ${active && 'bg-zinv-50'}`}
                    href='#'>
                    <span className=''><Icon name='setting' size={24} /></span>
                    <span className='flex items-center justify-center'>Satın alınanlar ve üyelikler
                    </span>
                </a>
            )}
        </Menu.Item>

        <Seperator />

        <Menu.Item>
            {({ active }) => (
                <a
                    className={`flex items-center justify-center h-10 text-md font-semibold gap-x-6 px-3  ${active && 'bg-zinv-50'}`}
                    href='#'>
                    <span className=''><Icon name='setting' size={24} /></span>
                    <span className='flex items-center justify-center'>YouTube'daki verileriniz
                    </span>
                </a>
            )}
        </Menu.Item>

        <Menu.Item>
            {({ active }) => (
                <a
                    className={`flex items-center justify-center h-10 text-md font-semibold gap-x-6 px-3  ${active && 'bg-zinv-50'}`}
                    href='#'>
                    <span className=''><Icon name='setting' size={24} /></span>
                    <span className='flex items-center justify-center'>Görünüm: Açık</span>
                </a>
            )}
        </Menu.Item>

        <Menu.Item>
            {({ active }) => (
                <a
                    className={`flex items-center justify-center h-10 text-md font-semibold gap-x-6 px-3  ${active && 'bg-zinv-50'}`}
                    href='#'>
                    <span className=''><Icon name='setting' size={24} /></span>
                    <span className='flex items-center justify-center'>Dil: Türkçe</span>
                </a>
            )}
        </Menu.Item>

        <Menu.Item>
            {({ active }) => (
                <a
                    className={`flex items-center justify-center h-10 text-md font-semibold gap-x-6 px-3  ${active && 'bg-zinv-50'}`}
                    href='#'>
                    <span className=''><Icon name='setting' size={24} /></span>
                    <span className='flex items-center justify-center'>Kısıtlı Mod: Kapalı</span>
                </a>
            )}
        </Menu.Item>

        <Menu.Item>
            {({ active }) => (
                <a
                    className={`flex items-center justify-center h-10 text-md font-semibold gap-x-6 px-3  ${active && 'bg-zinv-50'}`}
                    href='#'>
                    <span className=''><Icon name='setting' size={24} /></span>
                    <span className='flex items-center justify-center'>Konum: Türkiye</span>
                </a>
            )}
        </Menu.Item>

        <Menu.Item>
            {({ active }) => (
                <a
                    className={`flex items-center justify-center h-10 text-md font-semibold gap-x-6 px-3  ${active && 'bg-zinv-50'}`}
                    href='#'>
                    <span className=''><Icon name='setting' size={24} /></span>
                    <span className='flex items-center justify-center'>Klavye kısayolları
                    </span>
                </a>
            )}
        </Menu.Item>

        <Seperator />

        <Menu.Item>
            {({ active }) => (
                <a
                    className={`flex items-center justify-center h-10 text-md font-semibold gap-x-6 px-3  ${active && 'bg-zinv-50'}`}
                    href='#'>
                    <span className=''><Icon name='setting' size={24} /></span>
                    <span className='flex items-center justify-center'>Ayarlar
                    </span>
                </a>
            )}
        </Menu.Item>

        <Seperator />

        <Menu.Item>
            {({ active }) => (
                <a
                    className={`flex items-center justify-center h-10 text-md font-semibold gap-x-6 px-3  ${active && 'bg-zinv-50'}`}
                    href='#'>
                    <span className=''><Icon name='setting' size={24} /></span>
                    <span className='flex items-center justify-center'>Yardım
                    </span>
                </a>
            )}
        </Menu.Item>

        <Menu.Item>
            {({ active }) => (
                <a
                    className={`flex items-center justify-center h-10 text-md font-semibold gap-x-6 px-3  ${active && 'bg-zinv-50'}`}
                    href='#'>
                    <span className=''><Icon name='setting' size={24} /></span>
                    <span className='flex items-center justify-center'>Geri Bildirim Gönder</span>
                </a>
            )}
        </Menu.Item>

    </Menu.Items>
</>
</Menu> */}
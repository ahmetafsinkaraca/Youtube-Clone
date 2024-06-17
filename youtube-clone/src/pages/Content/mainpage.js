import React from 'react'
import Section from './components/Section'
import items from '../../data/items'
import shorts from '../../data/shorts'
import ShortsSection from './components/ShortsSection'

export default function MainPage({ isOpen }) {

  return (
    <div className='grid mt-32 ml-[275px] gap-y-8'>
      <Section
        title="Recently played"
        items={items}
        isOpen={isOpen}
      />

      <ShortsSection
       title='Shors'
       shorts={shorts}
       isOpen={isOpen}
      />
    
      <Section
        title="Shows to try"
        items={items}
        isOpen={isOpen}
      />
    </div>
  )

  
}

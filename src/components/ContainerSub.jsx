import React from 'react'
import CardSubMenu from './cards/CardSubMenu'


export default function ContainerSub({data=[], title}) {


  return (
    <div className='h-96 w-80  m-auto mt-28 md:mt-0 md:min-h-96 md:min-w-90 bg-gray-100 rounded-lg py-5 px-5'>
        <h1 className='text-gray-800 text-xl mb-5 font-semibold md:text-2xl'>Daftar {title} </h1>
        <div className='flex flex-col items-center md:items-start lg:gap-5 gap-2'>
        {
            data.map((item) => (
                <CardSubMenu key={item.id} title={item.title} link={item.link} desc={item.desc} />
            ))
        }

        </div>
    </div>
  )
}

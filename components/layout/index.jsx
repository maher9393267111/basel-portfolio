import React from 'react'
import Navbar from './navbar'

export default function Layout({children ,dir}) {
  return (
    <div dir={dir}>

<Navbar/>


<div>
    {children}
</div>



    </div>
  )
}

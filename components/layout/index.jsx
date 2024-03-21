import React from 'react'
import Navbar from './navbar'
import Footer from './footer'

export default function Layout({children ,dir}) {
  return (
    <div dir={dir}>

<Navbar/>


<div>
    {children}
</div>


<Footer/>


    </div>
  )
}

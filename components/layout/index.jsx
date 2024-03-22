import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { useAuth } from '@/functions/context'
import Loader from '../common/Loader'

export default function Layout({children ,dir}) {

const {pageLoading} = useAuth()



if(pageLoading) {
  return <Loader/>
}


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

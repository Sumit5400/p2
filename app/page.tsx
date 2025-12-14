import React from 'react'
import Navbar from './Pages/Navbar'
import Swiiper from './Pages/Swiiper'
import Section_1 from './Pages/Section_1'
import Section_2 from './Pages/Section_2'
import Sectionn_3 from './Pages/Section_3'
import Section_4 from './Pages/Section_4'
import Section_5 from './Pages/Section_5'
import Section_6 from './Pages/Section_6'
import Section_7 from './Pages/Section_7'
import Section_8 from './Pages/Section_8'


function page() {
  return (
    <>
    {/* <Navbar/> */}
    <Swiiper/>
    <Section_1/>
    <Section_2/>
    <div className='bg-primary'>
    <div className="container mt-4 rounded pb-4">
    <Sectionn_3/>
    </div>
    </div>
    <Section_4/>
    <Section_5/>
    <Section_6/>
    <Section_7/>
    <Section_8/>
    
    </>
  )
}

export default page
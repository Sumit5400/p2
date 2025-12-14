import Link from 'next/link'
import React from 'react'
import Clinker from './Pages/Clinker'
import Sectionn_3 from '../Pages/Section_3'
import Flow from './Pages/Flow'
import Strength from './Pages/Strength'
import Products from './Pages/Products'

function page() {
    return (
        <>
            <section className='bg-primary text-white'>
                <div className="container">
                    <h1>Our Products</h1>
                    <p><Link className='hover' href="/">Home</Link>/Our Products</p>
                </div>

            </section>
            <Products/>
            <Clinker />
            <div className='p-4 bg-primary'>
            <Sectionn_3 />
            </div>
            <Flow />
            <Strength />
        </>
    )
}

export default page
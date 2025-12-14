import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <>
    <section className='bg-primary text-white'>
        <div className="container p-1">
          <h1>Notice</h1>
          <p><Link className='hover' href="/">Home</Link>/Notice</p>
        </div>
      </section>
    </>
  )
}

export default page
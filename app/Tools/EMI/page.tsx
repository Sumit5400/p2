import Link from 'next/link'
import React from 'react'

function page() {

  return (
    <>
      <section className='bg-primary text-white'>
        <div className="container">
          <h1>
EMI Calculator</h1>
          <p><Link className='hover' href="/">Home</Link>/EMI Calculator</p>
        </div>
      </section>
      <section>
        <div className="container p-4">
          <div className="row g-1 align-items-center">
            <div className="col-auto">
              <input type="number" id="inputPassword6" className="form-control p-3" aria-describedby="passwordHelpInline" placeholder='Loan Amount(Rs)*' />
            </div>
            <div className="col-auto">
              <input type="number" id="inputPassword6" className="form-control p-3" aria-describedby="passwordHelpInline" placeholder='Loan Amount(Rs)*' />
            </div>
            <div className="col-auto">
              <input type="number" id="inputPassword6" className="form-control p-3" aria-describedby="passwordHelpInline" placeholder='Loan Amount(Rs)*' />
            </div>
            <div className="col-auto">
              <input type="number" id="inputPassword6" className="form-control p-3" aria-describedby="passwordHelpInline" placeholder='Loan Amount(Rs)*' />
            </div>
            <div className="col-auto ms-3">
              <button type="button" className="btn btn-primary p-2">Calculate EMI</button>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default page
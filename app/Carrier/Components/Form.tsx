"use client"
import React, { useState } from 'react'

function Form() {
  const [value, setValue] = useState("");
  return (
    <>
      <section className='mt-4'>
        <div className="container">
          <div className='shadow box3'>
            <div className="row g-3 p-4">
              <div className="col-lg-6">
                <input type="text" className="form-control" placeholder="Full Name" aria-label="Full Name" />
              </div>
              <div className="col-lg-6">
                <input type="email" className="form-control" placeholder="Email Address" aria-label="Email Address" />
              </div>
              <div className="col-lg-6 pt-4">
                <input type="number" className="form-control" placeholder="Phone" aria-label="Phone" />
              </div>
              <div className="col-lg-6 pt-4">
                <input type="text" className="form-control" placeholder="Address" aria-label="Address" />
              </div>
              <div className="col-lg-6 pt-4">
                <label className="visually-hidden" htmlFor="specificSizeSelect">Preference</label>
                <select
                  className="form-select"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                >
                  <option value="" disabled>Choose...</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-lg-6 p-4">
                <div className="mb-3">
                  <label htmlFor="formFile" className="form-label">Upload Your Resume</label>
                  <input className="form-control" type="file" id="formFile" />
                </div>

              </div>
              <div className="col-lg-12">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows={5} defaultValue={""} placeholder='Message' />

              </div>
              <div className="col-lg-12 submit">
                <button type="submit" className="btn btn-primary w-100">Submit</button>
                </div>

             
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Form
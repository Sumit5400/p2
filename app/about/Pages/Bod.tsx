import React from 'react'
import BofD from '../About_Component/BofD'
import Management from '../About_Component/Management'
import Sales from '../About_Component/Sales'
import Certifications from '../About_Component/Certifications'

function Bod() {
  return (
    <>
      <section className='bg-light-emphasis p-4'>
        <div className="container">
          <div>
            <div className='d-flex justify-content-center'>
            <ul className="nav nav-tabs gap-4 position-sticky top-0" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab"> Board of Directors</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab">Management Team</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab">Sales Team</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="contac-tab" data-bs-toggle="tab" data-bs-target="#contac" type="button" role="tab">Certifications</button>
              </li>
            </ul>
            </div>
            <div className="tab-content mt-3" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel">
                <BofD/>
              </div>
              <div className="tab-pane fade" id="profile" role="tabpanel">
                <Management/>
              </div>
              <div className="tab-pane fade" id="contact" role="tabpanel">
                <Sales/>
              </div>
              <div className="tab-pane fade" id="contac" role="tabpanel">
                <Certifications/>
              </div>
            </div>
          </div>



        </div>
      </section>
    </>
  )
}

export default Bod
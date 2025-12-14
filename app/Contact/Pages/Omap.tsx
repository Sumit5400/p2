import React from 'react'
import Map1 from './Map1'
import Map2 from './Map2'

function Omap() {
  return (
    <>
    <section>
        <div className="">
            <div>
                <div className='pt-4'>
            <div className='d-flex justify-content-center'>
            <ul className="nav nav-tabs gap-4 position-sticky top-0" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="contact-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab">Corporate Office</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="factory-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab">Factory</button>
              </li>
            </ul>
            </div>
            <div className="tab-content mt-3" id="myTabContent">
              <div className="tab-pane fade show active" id="contact" role="tabpanel">
                <Map1/>
              </div>
              <div className="tab-pane fade" id="factory" role="tabpanel">
                <Map2/>
              </div>
            </div>
          </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Omap
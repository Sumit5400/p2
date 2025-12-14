"use client"
import React, { useEffect } from 'react'

function Products() {
     useEffect(() => {
    const tabs = document.querySelectorAll('[data-bs-toggle="tab"]');

    tabs.forEach((tab) => {
      tab.addEventListener("mouseenter", () => {
        const bootstrap = require("bootstrap/dist/js/bootstrap.bundle.min.js");
        const tabTrigger = new bootstrap.Tab(tab);
        tabTrigger.show();
      });
    });
  }, []);
  return (
    <>
    <div className="container pt-4">
                <h6 className='prod-title'>Our Products</h6>
                <h3 className='text-center text-primary'>Building Excellence: Explore Our Premier Cement Products</h3>
            </div>
    <section className='bg-light-emphasis p-4'>
        <div className="container">
          <div>
            <div className='d-flex justify-content-center'>
            <ul className="nav nav-tabs gap-4" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab">
                    <img className='product-tab-img' src="https://www.aclnepal.com/np/wp-content/uploads/2023/12/opc-53.png" alt="" />
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab">
                    <img className='product-tab-img' src="https://www.aclnepal.com/np/wp-content/uploads/2023/12/opc-53.png" alt="" />
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab">
                    <img className='product-tab-img' src="https://www.aclnepal.com/np/wp-content/uploads/2023/12/opc-53.png" alt="" />
                </button>
              </li>
            </ul>
            </div>
            <div className="tab-content mt-3" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel">
                 <div className='p-4 mt-4'>
                        <h2 className='text-primary text-center'>Ordinary Portland Cement (OPC) 53</h2>
                        <p className='fw-bold text-center p-4'>Arghakhanchi OPC Cement comes with a strength of 53 MPa and hence, the structures built by using this cement stand stronger and durable. The strength and quality of Arghakhanchi OPC cement is way higher than OPC cement of any other Nepali cement manufacturers.</p>
                    </div>
              </div>
              <div className="tab-pane fade" id="profile" role="tabpanel">
                <div className='p-4 mt-4'>
                        <h2 className='text-primary text-center'>Portland Pozzolana Cement (PPC)</h2>
                        <p className='fw-bold text-center p-4'>ACL initiated the production of PPC cement from the month of Jestha, 2076 BS by using a separate production line. This latest product was brought into the market to address the spontaneous demand of our esteemed customers. With the production of PPC cement, ACL has become a full-fledged cement company that produces clinker, OPC, and PPC cement.</p>
                    </div>
              </div>
              <div className="tab-pane fade" id="contact" role="tabpanel">
               
              </div>
            </div>
          </div>
          </div>
          </section>
    </>
  )
}

export default Products
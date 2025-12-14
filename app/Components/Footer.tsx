"use client"
import React, { useEffect } from 'react'

function Footer() {
  useEffect(() => {
  require("bootstrap/dist/js/bootstrap.bundle.min.js");
}, []);
  return (
    <>
    <footer className="bg-primary mt-4">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 pt-4">
        <img className="w-50" src="https://www.aclnepal.com/np/wp-content/uploads/2023/12/arghakhanchi-cement-white.png" alt='' />
        <p className="pt-4 text-white">Arghakhanchi Cement Ltd. is one of the largest manufacturers of OPC and
          PPC cement through a single production plant in the entire country.</p>
        <div className="d-flex gap-4 p-4">
          {/* <div class="border rounded-circle">
                  <i class="bi bi-facebook text-white"></i>
                  </div>
                  <div>
                  <i class="bi bi-facebook"></i>
                  </div>
                  <div>
                  <i class="bi bi-facebook"></i>
                  </div> */}
          <ul className="navbar-nav mb-2 mb-lg-0 ">
            <div className="d-flex gap-4 text-white">
              <li className="nav-item a">
                <a className="nav-link" href="#"><i className="bi bi-facebook" /></a>
              </li>
              <li className="nav-item a">
                <a className="nav-link" href="#"><i className="bi bi-youtube" /></a>
              </li>
              <li className="nav-item a">
                <a className="nav-link" href="#"><i className="bi bi-instagram" /></a>
              </li>
            </div></ul>
        </div>
      </div>
      <div className="col-lg-8 p-4">
        <div className="row">
          <div className="col-lg-3 text-white">
            <div className="hov">
              <h3>Quick Links</h3>
              <h6><a href=''>Home</a></h6>
              <h6><a href=''>About us</a></h6>
              <h6><a href=''>Our Products</a></h6>
              <h6><a href=''> Career</a></h6>
              <h6><a href=''>FAQs</a></h6>
              <h6><a href=''> Contact</a></h6>
            </div>
          </div>
          <div className="col-lg-3 text-white">
            <div className="hov">
              <h3>Quick Links</h3>
              <h6><a href=''>Home</a></h6>
              <h6><a href=''>About us</a></h6>
              <h6><a href=''>Our Products</a></h6>
              <h6><a href=''> Career</a></h6>
              <h6><a href=''>FAQs</a></h6>
              <h6><a href=''> Contact</a></h6>
            </div>
          </div>
          <div className="col-lg-3 text-white">
            <div className="hov">
              <h3>Quick Links</h3>
              <h6><a href=''>Home</a></h6>
              <h6><a href=''>About us</a></h6>
              <h6><a href=''>Our Products</a></h6>
              <h6><a href=''> Career</a></h6>
              <h6><a href=''>FAQs</a></h6>
              <h6><a href=''> Contact</a></h6>
            </div>
          </div>
          <div className="col-lg-3 text-white">
            <div className="hov">
              <h3>Quick Links</h3>
              <h6><a href=''>Home</a></h6>
              <h6><a href=''>About us</a></h6>
              <h6><a href=''>Our Products</a></h6>
              <h6><a href=''> Career</a></h6>
              <h6><a href=''>FAQs</a></h6>
              <h6><a href=''> Contact</a></h6>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4 text-white d-flex flex-column flex-md-row justify-content-between align-items-center border-top">
        <p className=' mb-md-0'>© Copyright Arghakhanchi Cement 2024 . All right reserved.</p>
        <p className=''>Designed &amp; Developed By Smartway Learning Technologies</p>
      </div>
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer
"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

function Navbar() {
     const [isScrolled, setIsScrolled] = useState(false);
      // Function to handle the scroll event
  const handleScroll = () => {
    // Check if the vertical scroll position (scrollY or pageYOffset) is greater than a certain value (e.g., 100px)
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Add and remove the scroll event listener using useEffect
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  //    useEffect(() => {
  //   const bootstrap = require("bootstrap/dist/js/bootstrap.bundle.min.js");

  //   const dropdowns = document.querySelectorAll(".nav-item.dropdown");

  //   dropdowns.forEach((dropdown) => {
  //     dropdown.addEventListener("mouseenter", function () {
  //       const menu = bootstrap.Dropdown.getOrCreateInstance(
  //         this.querySelector(".dropdown-toggle")
  //       );
  //       menu.show();
  //     });

  //     dropdown.addEventListener("mouseleave", function () {
  //       const menu = bootstrap.Dropdown.getOrCreateInstance(
  //         this.querySelector(".dropdown-toggle")
  //       );
  //       menu.hide();
  //     });
  //   });
  // }, []);
            
 
  return (
    
    <nav className= {`navbar navbar-expand-lg bg-body-tertiary border rounded text-center  bg-light p-0  ${isScrolled ? 'position-fixed top-0 st' : ''}`} style={{zIndex: 1030, }}>
  <div className="container d-flex align-item-center">
    <Link className="navbar-brand" href="/"><img style={{width: 200}} src="https://www.aclnepal.com/np/wp-content/uploads/2023/12/arghakhanchi-cement-logo.png" alt='' /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav nav-pad me-auto mb-2 p-0 mb-lg-0 position-relative gap-2">
        <li className="nav-item dropdown apple">
          <Link className="nav-link dropdown-toggle hover-trigger" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Change Region
          </Link>
          <ul className="dropdown-menu ball hover-content">
            <li><Link className="dropdown-item" href="/india">
                <div className="w-100 d-flex ">
                  <img className="w-50 p-2" src="https://www.aclnepal.com/np/wp-content/themes/arghakhanchi_thm/assets/images/india-flag.png" alt='' />
                  <p className="px-2 pt-2">India</p>
                </div>
              </Link></li>
            {/* <li>
                          <hr class="dropdown-divider">
                      </li> */}
            <li><Link className="dropdown-item border-top" href="/">
                <div className="go d-flex">
                  <img className="w-100 p-3" src="https://www.aclnepal.com/np/wp-content/themes/arghakhanchi_thm/assets/images/nepal-flag.png" alt='' />
                  <p className="pt-3 ld-base">Nepal</p>
                </div>
              </Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/">Home</Link>
        </li>
        <li className="nav-item dropdown apple">
          <Link className="nav-link dropdown-toggle" href="/about" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            About Us
          </Link>
          <ul className="dropdown-menu nav-box ball">
            <li><Link className="dropdown-item border-bottom p-3" href="/about">About Us</Link></li>
            <li><Link className="dropdown-item border-bottom p-3" href="/about#home">Board of Directors</Link></li>
            <li><Link className="dropdown-item border-bottom p-3" href="/about#profile">Management Teams</Link></li>
            <li><Link className="dropdown-item border-bottom p-3" href="/about#contact">Sales Team</Link></li>
            <li><Link className="dropdown-item  p=3 pb-3 lh-base" href="/about#contac">Certification</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/our-products">Our Products</Link>
        </li>
        <li className="nav-item dropdown apple">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Media Center
          </Link>
          <ul className="dropdown-menu nav-box1 media-box">
            <li><Link className="dropdown-item" href="#" />
              <div className="row">
                <div className="col-lg-4">
                  <h6 className="border-bottom text-center fw-bold fs-4 p-2 text-primary">Media</h6>
                  <p className="border-bottom text-center"><Link className='menu-item' href='/Media-Center/ImageGallary'>Image Gallery</Link></p>
                  <p className="border-bottom text-center"><Link className='menu-item' href='/Media-Center/VideoGallary'>Video Gallery</Link></p>
                  <p className="border-bottom text-center"><Link className='menu-item' href='/Media-Center/Blog'>Blog</Link></p>
                </div>
                <div className="col-lg-4">
                  <h6 className="border-bottom text-center fw-bold fs-4 p-2 text-primary">News</h6>
                  <p className="border-bottom text-center"><Link className='menu-item' href='/Media-Center/Press'>Press Release</Link></p>
                  <p className="border-bottom text-center"><Link className='menu-item' href='/Media-Center/Notice'>Notices</Link></p>
                  <p className="border-bottom text-center"><Link className='menu-item' href='/Media-Center/CSR'>CSR</Link></p>
                </div>
                <div className="col-lg-4">
                  <h6 className="border-bottom text-center me-4 fw-bold fs-4 p-2 text-primary">Vastu</h6>
                  <p className="border-bottom text-center me-4"><Link className='menu-item' href='#'>Exterior</Link></p>
                  <p className="border-bottom text-center me-4"><Link className='menu-item' href='#'>Interior</Link></p>
                  <p className="border-bottom text-center me-4"><Link className='menu-item' href='#'>Graphical</Link></p>
                </div>
              </div></li>
          </ul>
        </li>
        <li className="nav-item dropdown apple">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Tools
          </Link>
          <ul className="dropdown-menu box2 ball">
            <li><Link className="dropdown-item border-bottom" href="/Tools/Cal">Cement Calculator</Link></li>
            <li><Link className="dropdown-item" href="/Tools/EMI">EMI Calculator</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/Carrier">Carrier</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link me-4" href="/Contact">Contacts</Link>
        </li>
        {/* <li class="nav-item">
                  <Link class="nav-link" href="#"><i class="bi bi-list fs-2 position-absolute top-0"></i></Link>
              </li> */}
      </ul></div>
  </div>
</nav>

  )
}

export default Navbar
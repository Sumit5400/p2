import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <>
      <section className='bg-primary text-white'>
        <div className="container p-1">
          <h1>Blog</h1>
          <p><Link className='hover' href="/">Home</Link>/Blog</p>
        </div>
      </section>
      <section className='p-4 m-4'>
        <div className="container">
          <div>
            <div className='d-flex justify-content-center'>
            <ul className="nav nav-tabs gap-4 position-sticky top-0" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab">English</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab">Nepali</button>
              </li>
              
            </ul>
            </div>
            <div className="tab-content mt-3" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel">
                {/* Slide1 Start */}
                <div className="row p-4 mt-4">
            <div className="col-lg-4">
              <div className="img-hover overflow-hidden">
                <Link href="./ImageGallary/Components/CIndia">
                  <img className='w-100 rounded' src="https://www.aclnepal.com/np/wp-content/uploads/2024/05/arg.jpg" alt="" />
                </Link>
                
                <p className="pt-2 mb-1">May 14, 2024</p>
<h5 className="text-primary mt-0"><Link className="menu-item1" href="">Why Do Concrete Slabs Crack? Exploring the Common Causes</Link></h5>
<p><Link className='continue-read' href="">continue reading</Link></p>
              
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img-hover overflow-hidden">
                <Link href="./ImageGallary/Components/CIndia">
                  <img className='w-100 rounded' src="https://www.aclnepal.com/np/wp-content/uploads/2024/05/arg.jpg" alt="" />
                </Link>
                
                <p className="pt-2 mb-1">May 14, 2024</p>
<h5 className="text-primary mt-0"><Link className="menu-item1" href="">Why Do Concrete Slabs Crack? Exploring the Common Causes</Link></h5>
<p><Link className='continue-read' href="">continue reading</Link></p>
              
              </div>
            </div>
          

            <div className="col-lg-4">
            <div className="img-hover overflow-hidden">
                <Link href="./ImageGallary/Components/CIndia">
                  <img className='w-100 rounded' src="https://www.aclnepal.com/np/wp-content/uploads/2024/05/arg.jpg" alt="" />
                </Link>
                
                <p className="pt-2 mb-1">May 14, 2024</p>
<h5 className="text-primary mt-0"><Link className="menu-item1" href="">Why Do Concrete Slabs Crack? Exploring the Common Causes</Link></h5>
<p><Link className='continue-read' href="">continue reading</Link></p>
              
              </div>
            </div>
            <div className="col-lg-4">
            <div className="img-hover overflow-hidden">
                <Link href="./ImageGallary/Components/CIndia">
                  <img className='w-100 rounded' src="https://www.aclnepal.com/np/wp-content/uploads/2024/05/arg.jpg" alt="" />
                </Link>
                
                <p className="pt-2 mb-1">May 14, 2024</p>
<h5 className="text-primary mt-0"><Link className="menu-item1" href="">Why Do Concrete Slabs Crack? Exploring the Common Causes</Link></h5>
<p><Link className='continue-read' href="">continue reading</Link></p>
              
              </div>
            </div>
            <div className="col-lg-4">
            <div className="img-hover overflow-hidden">
                <Link href="./ImageGallary/Components/CIndia">
                  <img className='w-100 rounded' src="https://www.aclnepal.com/np/wp-content/uploads/2024/05/arg.jpg" alt="" />
                </Link>
                
                <p className="pt-2 mb-1">May 14, 2024</p>
<h5 className="text-primary mt-0"><Link className="menu-item1" href="">Why Do Concrete Slabs Crack? Exploring the Common Causes</Link></h5>
<p><Link className='continue-read' href="">continue reading</Link></p>
              
              </div>
            </div>
          </div>
          {/* Slide1 End */}
              </div>
              <div className="tab-pane fade" id="profile" role="tabpanel">
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default page
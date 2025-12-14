import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <>
      <section className='bg-primary text-white'>
        <div className="container p-1">
          <h1>Image Gallary</h1>
          <p><Link className='hover' href="/">Home</Link>/Image Gallary</p>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row p-4 mt-4">
            <div className="col-lg-4">
              <div className="img-hover overflow-hidden">
                <Link href="./ImageGallary/Components/CIndia">
                  <img className='w-100 rounded' src="https://www.aclnepal.com/np/wp-content/themes/arghakhanchi_thm/inc/timthumb.php?src=https://www.aclnepal.com/np/wp-content/uploads/2023/12/1.png&w=720&h=480" alt="" />
                </Link>
                <h5 className='text-center text-primary pt-2'><Link className='menu-item1' href="">Cement Export in India </Link></h5>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img-hover overflow-hidden">
                <Link href="./ImageGallary/Components/Mason">
                  <img className='w-100 rounded' src="https://www.aclnepal.com/np/wp-content/themes/arghakhanchi_thm/inc/timthumb.php?src=https://www.aclnepal.com/np/wp-content/uploads/2024/01/masonmeet-1-2.jpeg&w=720&h=480" alt="" />
                </Link>
                <h5 className='text-center text-primary pt-2'><Link className='menu-item1' href="">Mason Meet Organized Jointly By Arghakhanchi Cement... </Link></h5>
              </div>
            </div>
          

          <div className="col-lg-4">
            <div className="img-hover overflow-hidden">
              <Link href="./ImageGallary/Components/Arga">
                <img className='w-100 rounded' src="https://www.aclnepal.com/np/wp-content/themes/arghakhanchi_thm/inc/timthumb.php?src=https://www.aclnepal.com/np/wp-content/uploads/2024/01/healthcenter1-2.jpeg&w=720&h=480" alt="" />
              </Link>
              <h5 className='text-center text-primary pt-2'><Link className='menu-item1' href="">
Arghakhanchi Cement to Construct Health Center in…
 </Link></h5>
            </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default page
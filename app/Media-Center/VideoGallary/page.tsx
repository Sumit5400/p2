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
    <section className='pt-4 mt-4'>
      <div className="container">
        <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
  <li className="nav-item" role="presentation">
    <button
      className="nav-link active square-btn"
      id="pills-home-tab"
      data-bs-toggle="pill"
      data-bs-target="#pills-home"
      type="button"
      role="tab"
    >
      TVC Ads
    </button>
  </li>

  <li className="nav-item" role="presentation">
    <button
      className="nav-link square-btn"
      id="pills-profile-tab"
      data-bs-toggle="pill"
      data-bs-target="#pills-profile"
      type="button"
      role="tab"
    >
      Events
    </button>
  </li>

  <li className="nav-item" role="presentation">
    <button
      className="nav-link square-btn"
      id="pills-contact-tab"
      data-bs-toggle="pill"
      data-bs-target="#pills-contact"
      type="button"
      role="tab"
    >
      Miscellaneous
    </button>
  </li>
</ul>

<div className="tab-content" id="pills-tabContent">
  {/* Slide One */}
  <div className="tab-pane fade show active" id="pills-home" role="tabpanel">
    <div className="row g-3">

      <div className="col-md-4">
        <div className="ratio ratio-16x9">
          <iframe width={560} height={315} src="https://www.youtube.com/embed/Lu7vcGHg6nQ?si=8fRPpjOcZgW5ZwIZ" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />

        </div>
      </div>

      <div className="col-md-4">
        <div className="ratio ratio-16x9">
          <iframe width={560} height={315} src="https://www.youtube.com/embed/dW5NqOyhn4A?si=jSY8rjY20hIe5Iw-" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />

        </div>
      </div>

      <div className="col-md-4">
        <div className="ratio ratio-16x9">
          <iframe width={560} height={315} src="https://www.youtube.com/embed/ck-CjwiNYJE?si=lL3chvVzjg7TCylS" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"
           allowFullScreen></iframe>

        </div>
      </div>

      <div className="col-md-4">
        <div className="ratio ratio-16x9">
          <iframe width={560} height={315} src="https://www.youtube.com/embed/25imT0nhFZQ?si=3w9bQFp94PnfZjrI" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />

        </div>
      </div>
      <div className="col-md-4">
        <div className="ratio ratio-16x9">
         <iframe width={560} height={315} src="https://www.youtube.com/embed/25imT0nhFZQ?si=3w9bQFp94PnfZjrI" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />

        </div>
      </div>

    </div>
  </div>
{/* Slide 1 End */}
  <div className="tab-pane fade" id="pills-profile" role="tabpanel">
    <div className="ratio ratio-16x9">
      <h3 className='text-center text-primary p-4'>No recent events!!!</h3>
    </div>
  </div>

  <div className="tab-pane fade" id="pills-contact" role="tabpanel">
    <div className="ratio ratio-16x9">
     <h3 className='text-center text-primary p-4'>No Videos under Miscellaneous!!</h3>
    </div>
  </div>
</div>

      </div>
    </section>
    </>
  )
}

export default page
import React from 'react'
import InstagramEmbed from './Instagram'

function Section_8() {
  return (
    <>
    <section className="bg-body-tertiary mt-4">
  <div className="container mt-4">
    <div className="row">
      <div className="col-lg-7">
        <div className="rounded-circle w-50 mt-4 pt-4">
          <a className="d-flex justify-content-between gap-4" href=''>
            <img className="rounded-circle wid " src="https://www.aclnepal.com/np/wp-content/uploads/sb-instagram-feed-images/arghakhanchicement.jpg" alt='' />
            <h4 className="text-primary pt-4">arghakhanchicement</h4>
          </a>
          {/* <div className='' style={{ padding: "10px",
        maxWidth: "350px",
        width: "100%",
        height:"400px",
        objectFit:"cover",
        margin:"0 auto" }}>
      <InstagramEmbed url="https://www.instagram.com/p/C8f5KxPJmpQ/?utm_source=ig_embed&utm_campaign=loading" />
    </div> */}
        </div>
      </div>
      <div className="col-lg-5 mt-4 pt-4">
        <h6>Contact Us</h6>
        <h3>Get In Touch With Us</h3>
        <form>
          <div className="mb-3">
            <input type="email" className="form-control p-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name" />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control p-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name" />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control p-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full Name" />
          </div>
          <div className="mb-3">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Section_8
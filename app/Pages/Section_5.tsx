import React from 'react'

function Section_5() {
  return (
    <>
    <section className="mt-4">
  <div className="container">
    <div className="row">
      <div className="col-lg-6">
        <h6 className="text-danger">Customer Says</h6>
        <h3 className="text-primary">Testimonials</h3>
        <div className="swiper mySwiper rounded ">
          <div className="swiper-wrapper ">
            <div className="swiper-slide">
              <div className="box rounded testimonial-text">
                <p>In Nepal, hydropower development is crucial for progress, demanding
                  uncompromising standards in every project aspect. With substantial investments
                  and a dedication to cutting-edge technology, the choice of cement was paramount.
                  After extensive research, Arghakhanchi cement emerged as the clear choice for
                  our hydropower projects. Its proven track record of exceptional compressive
                  strength and reliability made it the ideal partner for our endeavors.</p>
              </div>
              <div className="box1">
                <img src="https://www.aclnepal.com/np/wp-content/uploads/2024/01/dharma-raj-dahal.jpg" alt='' />
                <div>
                  <h3>Er. Kiran Malla</h3>
                  <p>High Himalaya Hydro Construction Pvt. Ltd.</p>
                  <p>Charirman</p>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination" />
        </div>
      </div>
      <div className="col-lg-6 mt-2">
        <h6 className="text-danger">Have A Question</h6>
        <h3 className="text-primary pb-4">Arghakhanchi Cement FAQ</h3>
        <div className="accordion shadow" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button fw-bold" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Does Arghakhanchi Cement have environmentally friendly practices?
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Arghakhanchi Cement is committed to sustainability through the integration of
                advanced technologies like Waste Heat Recovery System (WHRS) and Electrostatic
                Precipitator (ESP). These systems significantly reduce our environmental footprint
                and effectively mitigate pollution around our factory, showcasing our dedication to
                eco-friendly practices.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                What is the production capacity of Arghakhanchi Cement?
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Arghakhanchi Cement has a production capacity of 3,000 metric tons, equivalent to
                60,000 sacks per day.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                What types of cement does Arghakhanchi Cement produce?
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                Arghakhanchi Cement produces 53, 43 Grade OPC (Ordinary Portland Cement) and PPC
                (Portland Pozzolana Cement) through separate production plants.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                What is the difference between OPC and PPC?
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                OPC (Ordinary Portland Cement) is known for its high early strength, making it
                suitable for projects with stringent time constraints, while PPC (Portland Pozzolana
                Cement) offers advantages like enhanced long-term strength, durability, and reduced
                environmental impact due to the incorporation of pozzolanic materials like fly ash.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default Section_5
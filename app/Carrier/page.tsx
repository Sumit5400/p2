import Link from 'next/link'
import React from 'react'
import Resume from './Components/Resume'
import Form from './Components/Form'

function page() {
    return (
        <>
            <section className='bg-primary text-white'>
                <div className="container">
                    <h1>Careers</h1>
                    <p><Link className='hover' href="/">Home</Link>/Careers</p>
                </div>
            </section>
            <section className='bg-light-subtle overflow-hidden'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 p-4">

                            <h6 className='text-danger pt-4'>Open Positions</h6>
                            <h3 className='text-primary '>Careers at Arghakhanchi Cement</h3>

                            <p className='fst-italic fw-bold pt-4'>Currently, there are no available positions. Kindly complete the form below, and we will contact you once opportunities arise.</p>
                        </div>
                        <div className="col-lg-4">
                            <div className='d-flex justify-content-center image-box'>
                                <img className='wc' src="https://www.aclnepal.com/np/wp-content/themes/arghakhanchi_thm/assets/images/sunil-thapa.png" alt="" />
                            </div>
                            <div className="image-shape">
                                <div className="shape-1"></div>
                                <div className="shape-2"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <Resume/>
            <Form/>
        </>
    )
}

export default page
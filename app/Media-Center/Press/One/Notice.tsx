import Link from 'next/link'
import React from 'react'

function Notice() {
    return (
        <>
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
                                Notice
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
                                CSR
                            </button>
                        </li>
                    </ul>

                    <div className="tab-content" id="pills-tabContent">
                        {/* Slide One */}
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel">

                        </div>
                        {/* Slide 1 End */}
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel">
                            <div className="">
                                <div className="row p-2 border-bottom pb-1">
                                    <div className="col-lg-5">
                                        <Link href="">
                                            <img className='w-100 hover-opacity' src="https://www.aclnepal.com/np/wp-content/uploads/2024/01/arghakhanchi-cement-donated-five-million-rupees.png" alt="" />
                                        </Link>
                                    </div>
                                    <div className="col-lg-7 small-box">
                                        <Link className='text-primary' href="">Arghakhanchi Cement donated five million rupees in Corona Virus..</Link>
                                        <p className='pt-1'>10 Jan 2024</p>
                                    </div>
                                </div>
                                <div className="row p-2 border-bottom pb-1">
                                    <div className="col-lg-5">
                                        <Link href="">
                                            <img className='w-100 hover-opacity' src="https://www.aclnepal.com/np/wp-content/uploads/2024/01/arghakhanchi-cement-to-construct-health-center-in-siyari.png" alt="" />
                                        </Link>
                                    </div>
                                    <div className="col-lg-7 small-box">
                                        <Link className='text-primary' href="">Arghakhanchi Cement to construct Health Center in Siyari</Link>
                                        <p className='pt-1'>10 Jan 2024</p>
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

export default Notice
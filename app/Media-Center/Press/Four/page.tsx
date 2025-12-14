import Link from 'next/link'
import React from 'react'
import Notice from '../One/Notice'


function page() {
    return (
        <>
            <section className='bg-primary text-white'>
                <div className="container p-2">
                    <h1>Press Release</h1>
                    <p><Link className='hover' href="/">Home</Link>/Press Release</p>
                </div>
            </section>
            <section>
                <div className="container p-4 mt-4">
                    <div className="row">
                        <div className="col-lg-8">
                            <img src="https://www.aclnepal.com/np/wp-content/uploads/2024/01/43grade.png" alt="" />
                            <h3 className='text-primary pt-4'>Arghakhanchi OPC Cement Now Available In 43 Grade</h3>
                            <h6 className='text-primary pt-2'>Sources:</h6>
                            <a className='text-primary' href="https://arthasarokar.com/2021/03/Arghakhanchi-Cement%20.html" target='_blank'>https://arthasarokar.com/2021/03/Arghakhanchi-Cement%20.html</a>
                        </div>
                        <div className="col-lg-4 p-1 ps-4">
                            <h4 className='text-primary ps-4'>Recent Press Releases</h4>
                            {/* Slide*/}
                            <div className="row p-4 border-bottom pb-1">
                                <div className="col-lg-5">
                                    <Link href="/Media-Center/Press/Two">
                                        <img className='w-100 hover-opacity' src="https://www.aclnepal.com/np/wp-content/uploads/2023/12/5.png" alt="" />
                                    </Link>
                                </div>
                                <div className="col-lg-7 small-box">
                                    <Link className='text-primary' href="/Media-Center/Press/Two">Arghakhanchi Cement has started exporting its products to India.</Link>
                                    <p className='pt-1'>10 Jan 2024</p>
                                </div>
                            </div>
                            {/* End Slide */}
                            {/* Slide*/}
                            <div className="row p-4 border-bottom pb-1">
                                <div className="col-lg-5">
                                    <Link href="/Media-Center/Press/Three">
                                        <img className='w-100 hover-opacity' src="https://www.aclnepal.com/np/wp-content/uploads/2024/01/arghakhanchi-ipo.png" alt="" />
                                    </Link>
                                </div>
                                <div className="col-lg-7 small-box">
                                    <Link className='text-primary' href="/Media-Center/Press/Three">Arghakhachi Cement to issue IPO next FY</Link>
                                    <p className='pt-1'>10 Jan 2024</p>
                                </div>
                            </div>
                            {/* End Slide */}
                            {/* Slide*/}
                            <div className="row p-4 border-bottom pb-1">
                                <div className="col-lg-5">
                                    <Link href="">
                                        <img className='w-100 hover-opacity' src="https://www.aclnepal.com/np/wp-content/uploads/2024/01/43grade.png" alt="" />
                                    </Link>
                                </div>
                                <div className="col-lg-7 small-box">
                                    <Link className='text-primary' href="">Arghakhanchi OPC Cement Now Available In 43 Grade</Link>
                                    <p className='pt-1'>10 Jan 2024</p>
                                </div>
                            </div>
                            {/* End Slide */}
                            <Notice/>
                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default page
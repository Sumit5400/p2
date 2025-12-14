import Link from 'next/link'
import React from 'react'

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
                <div className="container">
                    <div className="row p-4 mt-4">
                        <div className="col-lg-4">
                            <div className="img-hover overflow-hidden">
                                <Link href="./Press/One">
                                    <img className='w-100 rounded' src="https://www.aclnepal.com/np/wp-content/uploads/2024/01/construction-expert.png" alt="" />
                                </Link>
                                <p className="pt-2 mb-1">Jan 10, 2024</p>
                                <h5 className="text-primary mt-0"><Link className="menu-item1" href="./Press/One">Construction Expert Interaction Program organized by Argakhanchi Cement.</Link></h5>
                                <button className="btn btn-primary" type="submit"><Link href="./Press/One">Read More</Link></button>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="img-hover overflow-hidden">
                                <Link href="./Press/Two">
                                    <img className='w-100 rounded' src="https://www.aclnepal.com/np/wp-content/uploads/2023/12/5.png" alt="" />
                                </Link>
                                <p className="pt-2 mb-1">May 14, 2024</p>
                                <h5 className="text-primary mt-0"><Link className="menu-item1" href="./Press/Two">Arghakhanchi Cement has started exporting its products to India.</Link></h5>
                                <button className="btn btn-primary" type="submit"><Link href="./Press/Two">Read More</Link></button>
                            </div>
                        </div>


                        <div className="col-lg-4">
                            <div className="img-hover overflow-hidden">
                                <Link href="./Press/Three">
                                    <img className='w-100 rounded' src="https://www.aclnepal.com/np/wp-content/uploads/2024/01/arghakhanchi-ipo.png" alt="" />
                                </Link>
                                <p className="pt-2 mb-1">May 14, 2024</p>
                                <h5 className="text-primary mt-0"><Link className="menu-item1" href="./Press/Three">Arghakhachi Cement to issue IPO next FY</Link></h5>
                                <button className="btn btn-primary" type="submit"><Link href="./Press/Three">Read More</Link></button>
                            </div>
                        </div>
                        <div className="col-lg-4 pt-4">
                            <div className="img-hover overflow-hidden">
                                <Link href="./Press/Four">
                                    <img className='w-100 rounded' src="https://www.aclnepal.com/np/wp-content/uploads/2024/01/43grade.png" alt="" />
                                </Link>
                                <p className="pt-2 mb-1">May 14, 2024</p>
                                <h5 className="text-primary mt-0"><Link className="menu-item1" href="./Press/Four">Arghakhanchi OPC Cement Now Available In 43 Grade</Link></h5>
                                <button className="btn btn-primary" type="submit"><Link href="./Press/Four">Read More</Link></button>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default page
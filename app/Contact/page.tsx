import Link from 'next/link'
import React from 'react'
import { SlLocationPin } from "react-icons/sl";
import Omap from './Pages/Omap';
import Demo from './Pages/Demo';
import Map from './Pages/Map';

function page() {
    return (
        <>
            <section className='bg-primary text-white'>
                <div className="container p-1">
                    <h1>Contact</h1>
                    <p><Link className='hover' href="/">Home</Link> / Contact</p>
                </div>
            </section>
            <section className='bg-light'>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 bod-pad">
                            <h6 className='text-danger p-2'>Get in touch</h6>
                            <h4 className='text-primary'>We Love to Hear From You</h4>
                            <div className='shadow' style={{ height: "520px" }}>
                                <div className="row g-3 p-4" style={{ marginTop: "44px" }}>
                                    <div className="col-lg-12">
                                        <input type="text" className="form-control" placeholder="Full Name" aria-label="First name" />
                                    </div>
                                    <div className="col-lg-12 pt-3">
                                        <input type="email" className="form-control" placeholder="Email Address" aria-label="Last name" />
                                    </div>
                                    <div className="col-lg-12 pt-3">
                                        <input type="number" className="form-control" placeholder="Phone" aria-label="Last name" />
                                    </div>
                                    <div className="col-lg-12 pt-3">
                                        <textarea className="form-control" id="exampleFormControlTextarea1" rows={4} defaultValue={""} placeholder='Message' />

                                    </div>
                                    <div className="col-12 pt-4 mt-4">
                                        <button type="submit" className="btn btn-primary" style={{ width: "92%" }}>Submit</button>
                                    </div>

                                </div>


                            </div>

                        </div>
                        <div className="col-lg-4 bod-pad">
                            <div>
                                <h5 className='pt-4 text-primary'>Corporate Office</h5>
                                <div className='mt-4 pt-4 d-flex justify-content-start gap-4'>
                                    <SlLocationPin className='icon-d' />
                                    <div>
                                        <h4 className='text-primary'>Address:</h4>
                                        <p className='text-start'>House No. 21, Adarsha Marg, Thapathali, Kathmandu</p>
                                    </div>
                                </div>
                            </div>

                            <div className='d-flex justify-content-start gap-4'>
                                <SlLocationPin className='icon-c' />
                                <div>
                                    <h4 className='text-primary'>Phone :</h4>
                                    <p className='text-start'><a className='text-dark' href="tel:+977-1-4102188"> +977-1-4102188</a> / <a className='text-dark' href="tel:+977-1-5357670"> +977-1-5357670</a></p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-start gap-4'>
                                <SlLocationPin className='icon-c' />
                                <div>
                                    <h4 className='text-primary'>Email Address :</h4>
                                    <p className='text-start'> <a className='text-dark' href="mailto:customercare@acplnepal.com">customercare@acplnepal.com</a>
                                    </p>
                                </div>
                            </div>
                            <div>
                                <h5 className='pt-4 text-primary'>Factory</h5>
                                <div className='mt-4 pt-4 d-flex justify-content-start gap-4'>
                                    <SlLocationPin className='icon-d' />
                                    <div>
                                        <h4 className='text-primary'>Address:</h4>
                                        <p className='text-start'>House No. 21, Adarsha Marg, Thapathali, Kathmandu</p>
                                    </div>
                                </div>
                            </div>

                            <div className='d-flex justify-content-start gap-4'>
                                <SlLocationPin className='icon-c' />
                                <div>
                                    <h4 className='text-primary'>Phone :</h4>
                                    <p className='text-start'><a className='text-dark' href="tel:+977-1-4102188"> +977-1-4102188</a> / <a className='text-dark' href="tel:+977-1-5357670"> +977-1-5357670</a></p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-start gap-4'>
                                <SlLocationPin className='icon-c' />
                                <div>
                                    <h4 className='text-primary'>Email Address :</h4>
                                    <p className='text-start'> <a className='text-dark' href="mailto:customercare@acplnepal.com">customercare@acplnepal.com</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Map/>
            
        </>
    )
}

export default page
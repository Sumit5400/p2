import Link from 'next/link'
import React from 'react'

function page() {
    return (
        <>
            <section className='bg-primary text-white'>
                <div className="container">
                    <h1>Cement Calculator</h1>
                    <p><Link className='hover' href="/">Home</Link>/Cement Calculator</p>
                </div>
            </section>
            <section>
                <div className='container p-4 mt-4'>
                    {/* Brick  */}
                    <div className='d-flex justify-content-evenly'>
                        {/* Brick Start  */}
                        <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5 text-primary" id="exampleModalToggleLabel">Cement Calculator For Brick Wall</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                    </div>
                                    <div className="modal-body">
                                        <div className="row p-4">
                                            <div className="col-lg-6">
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <h6>Length(In m)</h6>
                                                        <input type="number" id="Text1" name="TextBox1" className="w-100 text-center border rounded border-secondary"></input>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <h6>Length(In m)</h6>
                                                        <input type="number" id="Text1" name="TextBox1" className="w-100 text-center border rounded border-secondary"></input>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <h6>Length(In m)</h6>
                                                        <input type="number" id="Text1" name="TextBox1" className="w-100 text-center border rounded border-secondary"></input>
                                                    </div>
                                                    <div className="col-lg-12 p-4 mt-4">
                                                        <h6 className='text-center'>Amount of cement required</h6>
                                                        <input type="text" id="Text2" name="TextBox4" className="w-100 text-center border rounded border-secondary"></input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 d-flex justify-content-center">
                                                <img src="https://www.aclnepal.com/np/wp-content/themes/arghakhanchi_thm/assets/images/calculator/brick-wall-diagram.png" alt="" />
                                            </div>
                                        </div>
                                        <p className='fw-bold text-center'>It is recommended to use a mixing ratio of 1:6 for brickwork, indicating that for every 1 kilogram of cement, 6 kilograms of sand should be mixed.</p>
                                        <p className='text-center text-secondary'>Disclaimer: This calculation is an approximation and may vary based on the specific cement, water, aggregate, or reinforcements used on each job site. It is advisable to seek advice from an engineer before commencing any construction project.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <button className="btn" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
                            <div className='icon-box'>
                                <img src="https://www.aclnepal.com/np/wp-content/themes/arghakhanchi_thm/assets/images/calculator/brick-wall.png" alt="" />
                            </div>
                            <h3 className='text-primary fw-bold text-center s'>Brick Wall</h3>
                        </button>
                        {/* Brick End  */}
                        {/* Brick Start  */}
                        <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5 text-primary" id="exampleModalToggleLabel">Cement Calculator For Brick Wall</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                    </div>
                                    <div className="modal-body">
                                        <div className="row p-4">
                                            <div className="col-lg-6">
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <h6>Length(In m)</h6>
                                                        <input type="number" id="Text1" name="TextBox1" className="w-100 text-center border rounded border-secondary"></input>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <h6>Length(In m)</h6>
                                                        <input type="number" id="Text1" name="TextBox1" className="w-100 text-center border rounded border-secondary"></input>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <h6>Length(In m)</h6>
                                                        <input type="number" id="Text1" name="TextBox1" className="w-100 text-center border rounded border-secondary"></input>
                                                    </div>
                                                    <div className="col-lg-12 p-4 mt-4">
                                                        <h6 className='text-center'>Amount of cement required</h6>
                                                        <input type="text" id="Text2" name="TextBox4" className="w-100 text-center border rounded border-secondary"></input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 d-flex justify-content-center">
                                                <img src="https://www.aclnepal.com/np/wp-content/themes/arghakhanchi_thm/assets/images/calculator/brick-wall-diagram.png" alt="" />
                                            </div>
                                        </div>
                                        <p className='fw-bold text-center'>It is recommended to use a mixing ratio of 1:6 for brickwork, indicating that for every 1 kilogram of cement, 6 kilograms of sand should be mixed.</p>
                                        <p className='text-center text-secondary'>Disclaimer: This calculation is an approximation and may vary based on the specific cement, water, aggregate, or reinforcements used on each job site. It is advisable to seek advice from an engineer before commencing any construction project.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <button className="btn" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
                            <div className='icon-box'>
                                <img src="https://www.aclnepal.com/np/wp-content/themes/arghakhanchi_thm/assets/images/calculator/brick-wall.png" alt="" />
                            </div>
                            <h3 className='text-primary fw-bold text-center s'>Brick Wall</h3>
                        </button>
                        {/* Brick End  */}
                        {/* Brick Start  */}
                        <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5 text-primary" id="exampleModalToggleLabel">Cement Calculator For Brick Wall</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                    </div>
                                    <div className="modal-body">
                                        <div className="row p-4">
                                            <div className="col-lg-6">
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <h6>Length(In m)</h6>
                                                        <input type="number" id="Text1" name="TextBox1" className="w-100 text-center border rounded border-secondary"></input>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <h6>Length(In m)</h6>
                                                        <input type="number" id="Text1" name="TextBox1" className="w-100 text-center border rounded border-secondary"></input>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <h6>Length(In m)</h6>
                                                        <input type="number" id="Text1" name="TextBox1" className="w-100 text-center border rounded border-secondary"></input>
                                                    </div>
                                                    <div className="col-lg-12 p-4 mt-4">
                                                        <h6 className='text-center'>Amount of cement required</h6>
                                                        <input type="text" id="Text2" name="TextBox4" className="w-100 text-center border rounded border-secondary"></input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 d-flex justify-content-center">
                                                <img src="https://www.aclnepal.com/np/wp-content/themes/arghakhanchi_thm/assets/images/calculator/brick-wall-diagram.png" alt="" />
                                            </div>
                                        </div>
                                        <p className='fw-bold text-center'>It is recommended to use a mixing ratio of 1:6 for brickwork, indicating that for every 1 kilogram of cement, 6 kilograms of sand should be mixed.</p>
                                        <p className='text-center text-secondary'>Disclaimer: This calculation is an approximation and may vary based on the specific cement, water, aggregate, or reinforcements used on each job site. It is advisable to seek advice from an engineer before commencing any construction project.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <button className="btn" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
                            <div className='icon-box'>
                                <img src="https://www.aclnepal.com/np/wp-content/themes/arghakhanchi_thm/assets/images/calculator/brick-wall.png" alt="" />
                            </div>
                            <h3 className='text-primary fw-bold text-center s'>Brick Wall</h3>
                        </button>
                        {/* Brick End  */}
                        {/* Brick Start  */}
                        <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5 text-primary" id="exampleModalToggleLabel">Cement Calculator For Brick Wall</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                    </div>
                                    <div className="modal-body">
                                        <div className="row p-4">
                                            <div className="col-lg-6">
                                                <div className="row">
                                                    <div className="col-lg-4">
                                                        <h6>Length(In m)</h6>
                                                        <input type="number" id="Text1" name="TextBox1" className="w-100 text-center border rounded border-secondary"></input>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <h6>Length(In m)</h6>
                                                        <input type="number" id="Text1" name="TextBox1" className="w-100 text-center border rounded border-secondary"></input>
                                                    </div>
                                                    <div className="col-lg-4">
                                                        <h6>Length(In m)</h6>
                                                        <input type="number" id="Text1" name="TextBox1" className="w-100 text-center border rounded border-secondary"></input>
                                                    </div>
                                                    <div className="col-lg-12 p-4 mt-4">
                                                        <h6 className='text-center'>Amount of cement required</h6>
                                                        <input type="text" id="Text2" name="TextBox4" className="w-100 text-center border rounded border-secondary"></input>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 d-flex justify-content-center">
                                                <img src="https://www.aclnepal.com/np/wp-content/themes/arghakhanchi_thm/assets/images/calculator/brick-wall-diagram.png" alt="" />
                                            </div>
                                        </div>
                                        <p className='fw-bold text-center'>It is recommended to use a mixing ratio of 1:6 for brickwork, indicating that for every 1 kilogram of cement, 6 kilograms of sand should be mixed.</p>
                                        <p className='text-center text-secondary'>Disclaimer: This calculation is an approximation and may vary based on the specific cement, water, aggregate, or reinforcements used on each job site. It is advisable to seek advice from an engineer before commencing any construction project.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <button className="btn" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">
                            <div className='icon-box'>
                                <img src="https://www.aclnepal.com/np/wp-content/themes/arghakhanchi_thm/assets/images/calculator/brick-wall.png" alt="" />
                            </div>
                            <h3 className='text-primary fw-bold text-center s'>Brick Wall</h3>
                        </button>
                        {/* Brick End  */}
                    </div>
                </div>

            </section>
        </>
    )
}

export default page
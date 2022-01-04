import React from 'react';

const WashingPoints = () => {
    return (
        <div className='container mt-5 pt-5'>
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className='text-center'>
                        <h4>WASHING POINTS</h4>
                        <div className="underline"></div>
                        <h1 className='fw-bold text-center mt-5 mb-5'>Car Washing & Care Points</h1>
                        <div className="row mb-5">
                            <div className="col-lg-6 col-md-12">
                                <div className='d-flex justify-content-center'>
                                    <i className="fas fa-map-marker-alt fa-2x text-danger"></i>
                                    <div>
                                        <h4 className='ms-3 fw-bold'>Car Washing Point</h4>
                                        <address className='mt-3'>
                                            123 Street, New York, USA
                                            <br />
                                            Call:+012 345 6789
                                            <br />
                                            Email us: info@example.com
                                        </address>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-12 col-lg-6">
                                <div className='d-flex justify-content-center'>
                                    <i className="fas fa-map-marker-alt fa-2x text-danger"></i>
                                    <div>
                                        <h4 className='ms-3 fw-bold'>Car Washing Point</h4>
                                        <address className='mt-3'>
                                            123 Street, California, USA
                                            <br />
                                            Call:+012 3485 6789
                                            <br />
                                            Email us: info@example.com
                                        </address>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6" data-aos="fade-up"
                    data-aos-duration="1000">
                    <div className='container shadow p-5 bg-danger text-dark'>
                        <h4 className='text-light mb-4'>Request for a car wash</h4>
                        <input type="text" class="form-control" placeholder="Full name" aria-label="First name" />
                        <br />
                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                        <br />
                        <textarea placeholder="Enter message" class="form-control" id="exampleFormControlTextarea1" rows="3">
                        </textarea>
                        <button class="btn btn-outline-light rounded-pill my-3">Send Message</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WashingPoints;
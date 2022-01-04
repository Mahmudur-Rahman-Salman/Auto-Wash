import React from 'react';
import { Typewriter } from 'react-simple-typewriter'

const Price = () => {
    return (
        <div className='container mt-5 pt-5'>
            <div className='text-center'>
                <h4>WASHING PLAN</h4>
                <div className="underline"></div>
                <h1 className='fw-bold text-center mb-5 mt-5'>
                    <span style={{ color: 'DarkSlateGray', fontWeight: 'bold' }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={["Choose Your Plan"]}
                            loop={5}
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span></h1>
            </div>
            <div className="row text-center">
                <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up"
                    data-aos-duration="1000">
                    <div class="p-5">
                        <h4 className='fw-bold'>BASIC CLEANING</h4>
                        <h3 className='fw-bold'><sup>$</sup>25</h3>
                        <p><i class="fas fa-check-circle text-primary"></i> Seats Washing</p>
                        <p><i class="fas fa-check-circle text-primary"></i> Exterior Washing</p>
                        <p><i class="fas fa-check-circle text-primary"></i> Interior Washing</p>
                        <p><i class="fas fa-check-circle text-primary"></i> Window Wiping</p>
                        <p><i class="fas fa-check-circle text-primary"></i> Wet Cleaning</p>
                        <p><i class="fas fa-check-circle text-primary"></i> Oil Changing</p>

                        <button class="btn btn-outline-danger rounded-pill">Choose Plan</button>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 shadow" data-aos="fade-up"
                    data-aos-duration="1000">
                    <div class="p-5">
                        <h4 className='text-danger fw-bold'>PREMIUM CLEANING</h4>
                        <h3 className='text-danger fw-bold'><sup>$</sup>35</h3>
                        <p><i class="fas fa-check-circle text-primary"></i> Seats Washing</p>
                        <p><i class="fas fa-check-circle text-primary"></i> Exterior Washing</p>
                        <p><i class="fas fa-check-circle text-primary"></i> Interior Washing</p>
                        <p><i class="fas fa-check-circle text-primary"></i> Window Wiping</p>
                        <p><i class="fas fa-check-circle text-primary"></i> Wet Cleaning</p>
                        <p><i class="fas fa-check-circle text-primary"></i> Oil Changing</p>

                        <button class="btn btn-outline-danger rounded-pill">Choose Plan</button>
                    </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4" data-aos="fade-up"
                    data-aos-duration="1000">
                    <div class="p-5">
                        <h4 className='fw-bold'>COMPLEX CLEANING</h4>
                        <h3 className='fw-bold'><sup>$</sup>49</h3>
                        <p><i class="fas fa-check-circle text-primary"></i> Seats Washing</p>
                        <p><i class="fas fa-check-circle text-primary"></i> Exterior Washing</p>
                        <p><i class="fas fa-check-circle text-primary"></i> Interior Washing</p>
                        <p><i class="fas fa-check-circle text-primary"></i> Window Wiping</p>
                        <p><i class="fas fa-check-circle text-primary"></i> Wet Cleaning</p>
                        <p><i class="fas fa-check-circle text-primary"></i> Oil Changing</p>

                        <button class="btn btn-outline-danger rounded-pill">Choose Plan</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Price;
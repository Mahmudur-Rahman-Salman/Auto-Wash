import React from 'react';

const Price = () => {
    return (
        <div className='container mt-5 pt-5'>
            <div className='text-center'>
                <h4>WASHING PLAN</h4>
                <div className="underline"></div>
                <h1 className='fw-bold text-center mb-5 mt-5'>Choose Your Plan</h1>
            </div>
            <div className="row text-center">
                <div className="col-12 col-md-6 col-lg-4">
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
                <div className="col-12 col-md-6 col-lg-4 shadow">
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
                <div className="col-12 col-md-6 col-lg-4">
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
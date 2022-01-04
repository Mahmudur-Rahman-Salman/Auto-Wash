import React from 'react';
import './Services.css'
const Services = () => {
    return (
        <div className='container mt-5'>
            <div className='text-center'>
                <h4>WHAT WE DO?</h4>
                <div className="underline"></div>
                <h1 className='fw-bold text-center mb-5 mt-5'>Premium Washing Services</h1>
            </div>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-12 text-center">
                    <div><i class="fas fa-car-crash fa-5x"></i></div>
                    <div>
                        <h3>Exterior Washing</h3>
                        <p>Lorem ipsum dolor sit amet elit. <br /> Phase nec preti facils ornare velit <br /> non metus tortor</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 text-center">
                    <div><i class="fas fa-car fa-5x"></i></div>
                    <div>
                        <h3>Interior Washing</h3>
                        <p>Lorem ipsum dolor sit amet elit. <br /> Phase nec preti facils ornare velit <br /> non metus tortor</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 text-center">
                    <div><i class="fas fa-chair fa-5x"></i></div>
                    <div>
                        <h3>Seats Washing</h3>
                        <p>Lorem ipsum dolor sit amet elit. <br /> Phase nec preti facils ornare velit <br /> non metus tortor</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 text-center">
                    <div><i class="fas fa-hands-wash fa-5x"></i></div>
                    <div>
                        <h3>Window Wiping</h3>
                        <p>Lorem ipsum dolor sit amet elit. <br /> Phase nec preti facils ornare velit <br /> non metus tortor</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 text-center">
                    <div><i class="fas fa-hand-sparkles fa-5x"></i></div>
                    <div>
                        <h3>Wet Cleaning</h3>
                        <p>Lorem ipsum dolor sit amet elit. <br /> Phase nec preti facils ornare velit <br /> non metus tortor</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-12 text-center">
                    <div><i class="fas fa-gas-pump fa-5x"></i></div>
                    <div>
                        <h3>Oil Changing</h3>
                        <p>Lorem ipsum dolor sit amet elit. <br /> Phase nec preti facils ornare velit <br /> non metus tortor</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Services;
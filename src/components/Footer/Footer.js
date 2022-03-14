import React from 'react';
import ScrollToTop from "react-scroll-to-top";


const Footer = () => {
    
    return (
        <div className='mt-5 pt-5 bg-dark text-white'>
            <ScrollToTop smooth top="1000" />
            <footer class="container">
                <div class="row g-5 text-center">
                    <div class="col-12 col-md-6 col-lg-3">
                        <h4 className='text-danger fw-bold'>Get In Touch</h4>
                        <address className='mt-3'>
                            123 Street, New York, USA
                            <br />
                            Call:+012 345 6789
                            <br />
                            Email us: info@example.com
                        </address>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <h4 className='text-danger fw-bold'>Popular Links</h4>
                        <p>About Us</p>
                        <p>Contact Us</p>
                        <p>Our Service</p>
                        <p>Price Plan</p>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <h4 className='text-danger fw-bold'>Useful Links</h4>
                        <p>Terms of Use</p>
                        <p>Privacy Policy</p>
                        <p>Cookies</p>
                        <p>Help</p>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <h4 className='text-danger fw-bold'>NewsLetter</h4>
                        <input type="text" class="form-control" placeholder="FullName" />
                        <br />
                        <input type="email" class="form-control" placeholder="Enter your email" />
                        <br />
                        <input type="submit" class="form-control" placeholder="submit" />
                        <div>

                        </div>
                    </div>
                </div>
                <p class="text-center text-primary p-4 mb-0">© copyrights 2021. All rights reserved by Salman</p>
            </footer>

        </div>
    );
};

export default Footer;
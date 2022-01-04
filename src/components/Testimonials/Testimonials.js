import React from 'react';
import testimonial1 from '../../img/testimonial-1.jpg';
import testimonial2 from '../../img/testimonial-2.jpg';
import testimonial3 from '../../img/testimonial-3.jpg';
import { Typewriter } from 'react-simple-typewriter'

const Testimonials = () => {
    return (
        <div className='container mt-5 pt-5'>
            <div className='text-center'>
                <h4>TESTIMONIAL</h4>
                <div className="underline"></div>
                <h1 className='fw-bold text-center mb-5 mt-5'>
                    <span style={{ color: 'DarkSlateGray', fontWeight: 'bold' }}>
                        {/* Style will be inherited from the parent element */}
                        <Typewriter
                            words={["What Our Clients Say"]}
                            loop={5}
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span></h1>
            </div>
            <div className="row">
                <div className="col-lg-4 text-center">
                    <img src={testimonial1} alt="testimonial" className='rounded-circle m-3' />
                    <div>
                        <h4>Willamson</h4>
                        <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. </p>
                    </div>
                </div>
                <div className="col-lg-4 text-center">
                    <img src={testimonial2} alt="testimonial" className='rounded-circle m-3' />
                    <div>
                        <h4>Emily Kale</h4>
                        <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. </p>
                    </div>
                </div>
                <div className="col-lg-4 text-center">
                    <img src={testimonial3} alt="testimonial" className='rounded-circle m-3' />
                    <div>
                        <h4>Watson</h4>
                        <p>Lorem ipsum dolor sit amet <br /> consectetur adipisicing elit. </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Testimonials;
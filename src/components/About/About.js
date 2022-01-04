import React from 'react';
import about from '../../img/about.jpg'
import { Typewriter } from 'react-simple-typewriter'


const About = () => {
    return (
        <div className='container mt-5 pt-5'>

            <div className="row text-center">
                <div className="col-md-6" data-aos="fade-up"
                    data-aos-duration="1000">
                    <img src={about} alt="" className='w-75' />
                </div>
                <div className="col-md-6">
                    <div className='m-3'>
                        <h4>About Us</h4>
                        <div className="underline"></div>
                        <h1 className='fw-bold text-center'>
                            <span style={{ color: 'DarkSlateGray', fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={["Car Washing And Detailing"]}
                                    loop={5}
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span></h1>
                        <p>Lorem ipsum dolor sit amet elit. In vitae turpis. Donec in hendre dui, vel blandit massa. Ut vestibu suscipi cursus. Cras quis porta nulla, ut placerat risus. Aliquam nec magna eget velit luctus dictum</p>
                        <p><i class="fas fa-check-circle text-primary"></i> Seats Washing</p>
                        <p><i class="fas fa-check-circle text-primary"></i> Exterior Washing</p>
                        <p><i class="fas fa-check-circle text-primary"></i> Interior Washing</p>
                        <p><i class="fas fa-check-circle text-primary"></i> Window Wiping</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
import React from 'react';
import { Carousel } from 'react-bootstrap';
import carousel1 from '../../img/carousel-1.jpg';
import carousel2 from '../../img/carousel-2.jpg';
import carousel3 from '../../img/carousel-3.jpg';

const Slider = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carousel1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3 className='fs-1 text-danger'>Washing & Detailing</h3>
                    <p className='fs-3'>Keep Your Car Newer</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carousel2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 className='fs-1 text-warning '>Washing & Detailing</h3>
                    <p className='fs-3'>Quality Service For You</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carousel3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3 className='fs-1 text-danger'>Washing & Detailing</h3>
                    <p className='fs-3'>Exterior and Interior Washing</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;
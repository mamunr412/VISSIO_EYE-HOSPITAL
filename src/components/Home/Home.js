import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import Services from '../Services/Services';
import photo1 from '../../image/Home-Slider-Desktop-2-Mar21.jpg';
import photo2 from '../../image/Home-Slider-Desktop-2020eyecare.jpg';
import photo3 from '../../image/Home-Slider-Desktop-Optom-1.jpg'



const Home = () => {
    return (
        <div>
            <Container className="mt-5">
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={photo1}
                            alt="First slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={photo2}
                            alt="Second slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={photo3}
                            alt="Third slide"
                        />
                        <Carousel.Caption>

                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>


            <Services></Services>

        </div>
    );
};

export default Home;
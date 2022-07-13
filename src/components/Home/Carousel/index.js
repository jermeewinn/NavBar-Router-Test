import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Photo1 from '../../assets/crazy.jpg';
import Photo2 from '../../assets/bubbles.jpg';
import Photo3 from '../../assets/cyberpunk.png';

function Object () {
    return(
        <Carousel>
            <Carousel.Item>
                <img
                    className='d-block w-100'
                    src={Photo1}
                    alt='Sonia'
                />
                <Carousel.Caption>
                    <h3>First Slide</h3>
                    <p>Lorem ipsum stuff</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className='d-block w-1oo'
                    src={Photo2}
                    alt='Bubbles'
                />
                <Carousel.Caption>
                    <h3>Second Slide</h3>
                    <p>More lorem ipsum</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img 
                    className='d-block w-1oo'
                    src={Photo3}
                    alt='Cyberpunk'
                />
                <Carousel.Caption>
                    <h3>Second Slide</h3>
                    <p>More lorem ipsum</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Object;
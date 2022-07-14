import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Photo1 from '../../assets/crazy.jpg';
import Photo2 from '../../assets/bubbles.jpg';
import Photo3 from '../../assets/cyberpunk.png';

function Object () {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectIndex, e) => {
        setIndex(selectIndex);
    };

    return(
        <Carousel variant='dark' activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                {/* <img
                    className='carousel-img'
                    src={Photo1}
                    alt='Sonia'
                /> */}
                <Carousel.Caption>
                
                    <h3>First Slide</h3>
                    <p>Lorem ipsum stuff</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                {/* <img 
                    className='d-block w-1oo'
                    src={Photo2}
                    alt='Bubbles'
                /> */}
                <Carousel.Caption>
                    <h3>Second Slide</h3>
                    <p>More lorem ipsum</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                {/* <img 
                    className='d-block w-1oo'
                    src={Photo3}
                    alt='Cyberpunk'
                /> */}
                <Carousel.Caption>
                    <h3>Third slide</h3>
                    <p>More lorem ipsum</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Object;
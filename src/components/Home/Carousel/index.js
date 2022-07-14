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
        <Carousel variant='dark' activeIndex={index} onSelect={handleSelect} interval={null} className='carousel'>
            <Carousel.Item>
                <img
                    className='carousel-img'
                    src={Photo1}
                    alt='Sonia'
                />
                <h1 className='carousel-top'>Stuff</h1>
                <Carousel.Caption>
                
                    <div>
                        <h3>First Slide</h3>
                        <pr/>
                        <p>Lorem ipsum stuff</p>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                {/* <img 
                    className='d-block w-1oo'
                    src={Photo2}
                    alt='Bubbles'
                /> */}
                <h1 className='carousel-top'>More Stuff</h1>
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
                <h1 className='carousel-top'>Even More Stuff</h1>
                <Carousel.Caption>
                    <h3>Third slide</h3>
                    <p>More lorem ipsum</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default Object;
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import Object from '../Home/Carousel';
// import Carousel from 'react-bootstrap';
// import Photo1 from '../assets/crazy.jpg';

export default class Home extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>Navbar-Router-Test | Home</title>
                </Helmet>
                <div>
                    <h1>Home</h1>
                    <p>Lookin cute.</p>
                </div>
                <div>
                    <Object />
                </div>
            </>
        )
    }
};

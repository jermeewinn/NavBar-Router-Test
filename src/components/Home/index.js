import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

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
            </>
        )
    }
};
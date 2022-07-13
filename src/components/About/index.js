import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export default class About extends Component {
    render() {
        return (
            <section>
                <Helmet>
                    <title>Navbar-Router-Test | About</title>
                </Helmet>
                <div>
                    <h1>About</h1>
                    <p>This is the about page.</p>
                </div>
            </section>
        )
    }
};
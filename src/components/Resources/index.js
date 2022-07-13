import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export default class Resources extends Component {
    render() {
        return (
            <section>
                <Helmet>
                    <title>Navbar-Router-Test | Resources</title>
                </Helmet>
                <div>
                    <h1>Resources</h1>
                    <p>This is the Resources page.</p>
                </div>
            </section>
            
        )
    }
};
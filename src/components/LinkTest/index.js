import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export default class LinkTest extends Component {
    render() {
        return (
            <section>
                <Helmet>
                    <title>Navbar-Router-Test | LinkTest</title>
                </Helmet>
            <div>
                <h1>Link</h1>
                <p>Lookin even more cute.</p>
            </div>
            </section>
        )
    }
};
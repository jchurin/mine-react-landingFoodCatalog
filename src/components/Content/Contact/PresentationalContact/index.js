import React, { Component } from 'react';
import { PresentationalContactInfo } from './PresentationalContactInfo';
import { PresentationalContactSocialMedia } from './PresentationalContactSocialMedia';

export class PresentationalContact extends Component {
    render() {
        return (
            <section id="contact" className="contact">
                <div className="container-fluid color-bg">
                    <PresentationalContactInfo />
                    <PresentationalContactSocialMedia />
                </div>
            </section>
        )
    }
}
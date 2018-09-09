import React from 'react';
import { PresentationalContactInfo } from './PresentationalContactInfo';
import { PresentationalContactSocialMedia } from './PresentationalContactSocialMedia';

export const PresentationalContact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container-fluid color-bg">
                <PresentationalContactInfo />
                <PresentationalContactSocialMedia />
            </div>
        </section>
    );
}
import React from 'react';
import { PresentationalWrapper } from '../../Shared/PresentationalWrapper';

export const Breakfast = () => {
    return (
        <section id="breakfast" className="breakfast">
            <PresentationalWrapper
                imgPath="bread_black"
                title="Our Breakfast Menu"
            />
        </section>
    );
}
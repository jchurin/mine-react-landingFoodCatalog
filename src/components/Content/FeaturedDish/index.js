import React from 'react';
import { PresentationalWrapper } from '../../Shared/PresentationalWrapper';

export const FeaturedDish = () => {
    return (
        <section id="featured-dish" className="featured-dish" >
            <PresentationalWrapper
                imgPath="food_black"
                title="Our Featured Dishes Menu"
            />
        </section>
    );
}
import React, { Component } from 'react';
import { PresentationalWrapper } from '../../Shared/PresentationalWrapper';

export class FeaturedDish extends Component {
    render() {
        return (
            <section id="featured-dish" className="featured-dish">
                <PresentationalWrapper
                    imgPath="food_black"
                    title="Our Featured Dishes Menu"
                />
            </section>
        )
    }
}
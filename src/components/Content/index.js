import React, { Component } from 'react';
import { CarouselHeader } from './CarouselHeader';
import { About } from './About';
import { Pricing } from './Pricing';
import { GratePlaceToEnjoy } from './GratePlaceToEnjoy';
import { Beer } from './Beer';
import { Breakfast } from './Breakfast';
import { Bread } from './Bread';
import { FeaturedDish } from './FeaturedDish';
import { Menu } from './Menu';
import { Dishes } from './Dishes';
import { Reserve } from './Reserve';
import { Reservation } from './Reservation';
import { Contact } from './Contact';
import { Footer } from './Footer';

export class Content extends Component {
    render() {
        return (
            <div>
                <CarouselHeader />
                <About />
                <Pricing />
                <GratePlaceToEnjoy />
                <Beer />
                <Breakfast />
                <Bread />
                <FeaturedDish />
                <Menu />
                <Dishes />
                <Reserve />
                <Reservation />
                <Contact />
                <Footer />
            </div>
        )
    }
}
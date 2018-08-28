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
import { HEADER_ITEMS } from '../../constants/header.constants';

export class Content extends Component {

    renderContent = () => {
        return (
            HEADER_ITEMS.map((item, index) => {
                return this.switchComponentsContent(item.title, index);
            })
        )
    }

    switchComponentsContent = (itemName, itemIndex) => {
        let component = null;
        switch (itemName) {
            case "about":
                component = <About key={itemIndex} />
                break;
            case "pricing":
                component = <Pricing key={itemIndex} />
                break;
            case "gpte":
                component = <GratePlaceToEnjoy key={itemIndex} />
                break;
            case "beer":
                component = <Beer key={itemIndex} />
                break;
            case "breakfast":
                component = <Breakfast key={itemIndex} />
                break;
            case "bread":
                component = <Bread key={itemIndex} />
                break;
            case "featured":
                component = <FeaturedDish key={itemIndex} />
                break;
            case "menu":
                component = <Menu key={itemIndex} />
                break;
            case "dishes":
                component = <Dishes key={itemIndex} />
                break;
            case "reserve":
                component = <Reserve key={itemIndex} />
                break;
            case "reservation":
                component = <Reservation key={itemIndex} />
                break;
            case "contact":
                component = <Contact key={itemIndex} />
                break;
            default:
                console.error('This item doesnt exist! Add it into de header.constants.js');
                break;
        }
        return component;
    }
    
    render() {
        return (
            <div>
                <CarouselHeader />
                {this.renderContent()}
                <Footer />
            </div>
        )
    }
}
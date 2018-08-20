import React, { Component } from 'react';
import { CarouselHeader } from './CarouselHeader';
import { About } from './About';

export class Content extends Component {
    render() {
        return (
            <div>
                <CarouselHeader />
                <About/>
            </div>
        )
    }
}
import React, { Component } from 'react';
import { PresentationalWrapper } from '../../Shared/PresentationalWrapper';

export class GratePlaceToEnjoy extends Component {
    render() {
        return (
            <section id="great-place-to-enjoy" className="great-place-to-enjoy">
                <PresentationalWrapper
                    imgPath="beer_black"
                    title="Great Place to enjoy"
                />
            </section>
        )
    }
}
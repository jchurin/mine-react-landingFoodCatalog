import React, { Component } from 'react';
import { PresentationalWrapper } from '../../Shared/PresentationalWrapper';

export class Breakfast extends Component {
    render() {
        return (
            <section id="breakfast" class="breakfast">
                <PresentationalWrapper
                    imgPath="bread_black"
                    title="Our Breakfast Menu"
                />
            </section>
        )
    }
}
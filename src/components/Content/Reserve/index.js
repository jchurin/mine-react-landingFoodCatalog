import React, { Component } from 'react';
import { PresentationalWrapper } from '../../Shared/PresentationalWrapper';

export class Reserve extends Component {
    render() {
        return (
            <section id="reserve" className="reserve">
                <PresentationalWrapper
                    imgPath="reserve_black"
                    title="Reserve A Table!"
                />
            </section>
        )
    }
}
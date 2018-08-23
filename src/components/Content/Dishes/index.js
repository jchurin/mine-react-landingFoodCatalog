import React, { Component } from 'react';
import { SliderDishesContainer } from './SliderDishesContainer';
import { PresentationalIcon } from '../../Shared/PresentationalIcon';

export class Dishes extends Component {
    render() {
        return (
            <section id="have-a-look" className="have-a-look hidden-xs">
                <PresentationalIcon path={"food_color"} />
                <div className="wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <SliderDishesContainer />
                            <div className="gallery-heading hidden-xs color-bg" style={{ width: "50%", float: "right" }}>
                                <h2 className="section-title">Have A Look To Our Dishes</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
import React, { Component } from 'react';
import { DISHES_ITEMS } from '../../../constants/dishes.constants';
import { SliderDishesItem } from './SliderDishesItem';

export class SliderDishesContainer extends Component {

    getDishesItem = () => {
        return DISHES_ITEMS.map((item, index) => {
            return (
                <SliderDishesItem
                    key={index}
                    path={item.imgPath}
                    extension={item.imgExtension}
                    alt={item.imgAlt}
                />
            )
        });
    }

    render() {
        return (
            <div className="menu-gallery" style={{ width: "50%", float: "left" }}>
                <div className="flexslider-container">
                    <div className="flexslider">
                        <ul className="slides">
                            {this.getDishesItem()}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
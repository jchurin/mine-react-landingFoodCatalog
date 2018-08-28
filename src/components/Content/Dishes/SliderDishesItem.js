import React, { Component } from 'react';

export class SliderDishesItem extends Component {
    render() {
        const {path, extension, alt} = this.props;
        return (
            <li>
                <img src={require(`../../../assets/images/menu-gallery/${path}.${extension}`)} alt={alt} />
            </li>
        );
    }
}
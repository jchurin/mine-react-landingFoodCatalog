import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class SliderDishesItem extends Component {

    static propTypes = {
        path: PropTypes.string.isRequired,
        extension: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired
    };

    render() {
        const {path, extension, alt} = this.props;
        return (
            <li>
                <img src={require(`../../../assets/images/menu-gallery/${path}.${extension}`)} alt={alt} />
            </li>
        );
    }
}
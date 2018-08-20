import React, { Component } from 'react';
import Item from './Item';
import { HEADER_ITEMS } from '../../constants/header.constants';

export class ItemContainer extends Component {

    _getItems = () => {
        return (
            Object.keys(HEADER_ITEMS).map((key, index) => {
                return (
                    <Item
                        key={index}
                        title={HEADER_ITEMS[key].title}
                        linkTo={HEADER_ITEMS[key].linkTo} />
                )
            })
        )
    }

    render() {
        return (
            <div className="collapse navbar-collapse" id="Food-fair-toggle">
                <ul className="nav navbar-nav navbar-right">
                    {this._getItems()}
                </ul>
            </div>
        )
    }
}
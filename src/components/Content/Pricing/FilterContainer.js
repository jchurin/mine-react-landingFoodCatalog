import React, { Component } from 'react';
import { PRICING_FILTER_ITEM } from '../../../constants/pricing-filter-item.constants';
import { FilterItem } from './FilterItem';

export class FilterContainer extends Component {

    _getItemsFilter = () => {
        return PRICING_FILTER_ITEM.map((item, index) => {
            return (
                <FilterItem
                    key={index}
                    dataFilter={item.dataFilter}
                    label={item.label} />
            )
        });
    }

    render() {
        return (
            <div className="pricing-filter">
                <div className="pricing-filter-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-10 col-md-offset-1">
                                <div className="section-header">
                                    <h2 className="pricing-title">Affordable Pricing</h2>
                                    <ul id="filter-list" className="clearfix">
                                        {this._getItemsFilter()}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
import React, { Component } from 'react';
import { PRICING_ITEM } from '../../../constants/pricing-item.constants';
import { ResultItem } from './ResultItem';

export class ResultContainer extends Component {

    _getResultItems = () => {
        return PRICING_ITEM.map((item, index) => {
            return (
                <ResultItem
                    key={index}
                    categories={item.categories}
                    img={item.img}
                    title={item.title}
                    subtitle={item.subtitle}
                    amount={item.amount}
                />
            )
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-10 col-md-offset-1">
                        <ul id="menu-pricing" className="menu-price">
                            {this._getResultItems()}
                        </ul>
                        {/* <div className="text-center">
                            <span id="loadPricingContent" className="btn btn-middle hidden-sm hidden-xs">Load More <span className="caret"></span></span>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}
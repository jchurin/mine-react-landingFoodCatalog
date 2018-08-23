import React, { Component } from 'react';
import { PresentationalIcon } from './PresentationalIcon';

export class PresentationalWrapper extends Component {
    render() {
        const { title, imgPath } = this.props;
        return (
            <div>
                <PresentationalIcon path={imgPath} />
                <div className="wrapper">
                    <div className="container-fluid">
                        <div className="row dis-table">
                            <div className="col-xs-6 col-sm-6 dis-table-cell color-bg">
                                <h2 className="section-title">{title}</h2>
                            </div>
                            <div className="col-xs-6 col-sm-6 dis-table-cell section-bg"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
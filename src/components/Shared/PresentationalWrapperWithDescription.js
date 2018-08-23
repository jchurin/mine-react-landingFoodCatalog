import React, { Component } from 'react';
import { PresentationalIcon } from './PresentationalIcon';

export class PresentationalWrapperWithDescription extends Component {
    render() {

        const { imgPath, title, children } = this.props;

        return (
            <div>
                <PresentationalIcon path={imgPath} />
                <div className="container-fluid">
                    <div className="row dis-table">
                        <div className="hidden-xs col-sm-6 dis-table-cell section-bg"></div>
                        <div className="col-xs-12 col-sm-6 dis-table-cell">
                            <div className="section-content">
                                <h2 className="section-content-title">{title}</h2>
                                <div className="section-description">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
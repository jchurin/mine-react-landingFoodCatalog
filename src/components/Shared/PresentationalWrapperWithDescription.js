import React, { Component } from 'react';
import { PresentationalIcon } from './PresentationalIcon';

export class PresentationalWrapperWithDescription extends Component {
    render() {

        const { imgPath, title, children } = this.props;

        return (
            <div>
                <PresentationalIcon path={imgPath} />
                <div class="container-fluid">
                    <div class="row dis-table">
                        <div class="hidden-xs col-sm-6 dis-table-cell section-bg"></div>
                        <div class="col-xs-12 col-sm-6 dis-table-cell">
                            <div class="section-content">
                                <h2 class="section-content-title">{title}</h2>
                                <div class="section-description">
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
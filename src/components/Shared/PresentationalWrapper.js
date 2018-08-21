import React, { Component } from 'react';
import { PresentationalIcon } from './PresentationalIcon';

export class PresentationalWrapper extends Component {
    render() {
        const { title, imgPath } = this.props;
        return (
            <div>
                <PresentationalIcon path={imgPath} />
                <div class="wrapper">
                    <div class="container-fluid">
                        <div class="row dis-table">
                            <div class="col-xs-6 col-sm-6 dis-table-cell color-bg">
                                <h2 class="section-title">{title}</h2>
                            </div>
                            <div class="col-xs-6 col-sm-6 dis-table-cell section-bg"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
import React, { Component } from 'react';
import { PresentationalIcon } from './PresentationalIcon';
import PropTypes from 'prop-types';

export class PresentationalWrapper extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        imgPath: PropTypes.string.isRequired
    };

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
        );
    }
}
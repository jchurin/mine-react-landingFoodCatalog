import React, { Component } from 'react';
import { PresentationalIcon } from './PresentationalIcon';
import PropTypes from 'prop-types';

export class PresentationalWrapperWithDescription extends Component {

    static propTypes = {
        imgPath: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired
    };

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
        );
    }
}
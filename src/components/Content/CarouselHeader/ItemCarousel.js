import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ItemCarousel extends Component {

    static propTypes = {
        orientationText: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        subTitle: PropTypes.string.isRequired
    };

    render() {
        const { orientationText, title, subTitle } = this.props;
        return (
            <div className="item">
                <div className="container">
                    <div className={`header-content ${orientationText}`}>
                        <h1 className="header-title">{title}</h1>
                        <p className="header-sub-title">{subTitle}</p>
                    </div>
                </div>
            </div>
        );
    }
}
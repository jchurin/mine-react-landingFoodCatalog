import React, { Component } from 'react';

export class ItemCarousel extends Component {
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
        )
    }
}
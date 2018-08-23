import React, { Component } from 'react';

export class MenuItem extends Component {
    render() {
        
        const { title, description, perHead, amount } = this.props;
        
        return (
            <div className="menu-item">
                <h3 className="menu-title">{title}</h3>
                <p className="menu-about">{description}</p>
                <div className="menu-system">
                    <div className="half">
                        <p className="per-head">
                            <span><i className="fa fa-user"></i></span>{perHead}
                        </p>
                    </div>
                    <div className="half">
                        <p className="price">{`$${amount}`}</p>
                    </div>
                </div>
            </div>
        )
    }
}
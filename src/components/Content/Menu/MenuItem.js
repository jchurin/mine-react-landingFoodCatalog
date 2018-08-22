import React, { Component } from 'react';

export class MenuItem extends Component {
    render() {
        
        const { title, description, perHead, amount } = this.props;
        
        return (
            <div class="menu-item">
                <h3 class="menu-title">{title}</h3>
                <p class="menu-about">{description}</p>
                <div class="menu-system">
                    <div class="half">
                        <p class="per-head">
                            <span><i class="fa fa-user"></i></span>{perHead}
                        </p>
                    </div>
                    <div class="half">
                        <p class="price">{`$${amount}`}</p>
                    </div>
                </div>
            </div>
        )
    }
}
import React, { Component } from 'react';

export class PresentationalIcon extends Component {
    render() {
        const { path } = this.props;
        return (
            <img class="img-responsive section-icon hidden-sm hidden-xs" src={require(`../../assets/images/icons/${path}.png`)} alt={path}/>
        )
    }
}
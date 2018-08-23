import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class PresentationalIcon extends Component {

    static propTypes = {
        path: PropTypes.string.isRequired
    };

    render() {
        const { path } = this.props;
        return (
            <img className="img-responsive section-icon hidden-sm hidden-xs" src={require(`../../assets/images/icons/${path}.png`)} alt={path}/>
        )
    }
}
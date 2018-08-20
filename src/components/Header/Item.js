import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class Item extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        linkTo: PropTypes.string.isRequired
    };
    
    render() {
        const { title, linkTo } = this.props;
        return (
            <li><Link to={`#${linkTo}`}>{title}</Link></li>
        )
    }
}
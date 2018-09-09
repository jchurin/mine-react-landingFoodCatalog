import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export class PresentationalContactSocialMediaItem extends Component {

    static propTypes = {
        url: PropTypes.string.isRequired,
        iconClassName: PropTypes.string.isRequired
    };

    render() {
        const { url, iconClassName } = this.props;
        return (
            <li><Link to={`//${url}`} target="_blank" className={iconClassName}></Link></li>
        )
    }
}
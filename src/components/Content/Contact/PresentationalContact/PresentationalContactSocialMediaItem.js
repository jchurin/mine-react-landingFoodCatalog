import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export class PresentationalContactSocialMediaItem extends Component {
    render() {
        const { url, iconClassName } = this.props;
        return (
            <li><Link to={`//${url}`} target="_blank" className={iconClassName}></Link></li>
        )
    }
}
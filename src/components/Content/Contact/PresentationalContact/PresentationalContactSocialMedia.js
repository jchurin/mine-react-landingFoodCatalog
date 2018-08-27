import React, { Component } from 'react';
import { SOCIAL_MEDIA_ITEMS } from '../../../../constants/social-media.constants';
import { PresentationalContactSocialMediaItem } from './PresentationalContactSocialMediaItem';

export class PresentationalContactSocialMedia extends Component {

    getSocialMediaItems = () => {
        return SOCIAL_MEDIA_ITEMS.map((item, index) => {
            return (
                <PresentationalContactSocialMediaItem
                    key={index}
                    url={item.url}
                    iconClassName={item.iconClassName}
                />
            )
        });
    }

    render() {
        return (
            <div className="social-media">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <ul className="center-block">
                            {this.getSocialMediaItems()}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
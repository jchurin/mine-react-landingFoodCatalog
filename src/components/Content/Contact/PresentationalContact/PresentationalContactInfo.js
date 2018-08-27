import React, { Component } from 'react';
import { CONTACT_INFO } from '../../../../constants/contact-info.constants';

export class PresentationalContactInfo extends Component {

    constructor() {
        super();
        this.state = {
            contactInfo: CONTACT_INFO
        };
    }

    render() {
        return (
            <div className="row dis-table">
                <div className="hidden-xs col-sm-6 dis-table-cell">
                    <h2 className="section-title">Contact With us</h2>
                </div>
                <div className="col-xs-6 col-sm-6 dis-table-cell">
                    <div className="section-content">
                        <p>{this.state.contactInfo.street}</p>
                        <p>{this.state.contactInfo.phone}</p>
                        <p>{this.state.contactInfo.email}</p>
                    </div>
                </div>
            </div>
        )
    }
}
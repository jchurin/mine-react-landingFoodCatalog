import React, { Component } from 'react';
import { PresentationalContact } from './PresentationalContact';
import { MapContact } from './MapContact';
import { FormContact } from './FormContact';

export class Contact extends Component {
    render() {
        return (
            <div>
                <PresentationalContact />
                <MapContact />
                <FormContact />
            </div>
        )
    }
}
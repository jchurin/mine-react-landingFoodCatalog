import React from 'react';
import { PresentationalContact } from './PresentationalContact';
import { MapContact } from './MapContact';
import { FormContact } from './FormContact';

export const Contact = () => {
    return (
        <div>
            <PresentationalContact />
            <MapContact />
            <FormContact />
        </div>
    );
}
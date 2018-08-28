import React from 'react';
import { PresentationalIcon } from '../../Shared/PresentationalIcon';
import { ReservationContainer } from './ReservationContainer';

export const Reservation = () => {
    return (
        <section className="reservation" id="reservation">
            <PresentationalIcon path="reserve_color" />
            <ReservationContainer />
        </section>
    );
}
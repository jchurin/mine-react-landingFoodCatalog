import React, { Component } from 'react';
import { PresentationalIcon } from '../../Shared/PresentationalIcon';
import { ReservationContainer } from './ReservationContainer';

export class Reservation extends Component {
    render() {
        return (
            <section className="reservation" id="reservation">
                <PresentationalIcon path="reserve_color" />
                <ReservationContainer />
            </section>
        )
    }
}
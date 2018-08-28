import React from 'react';
import { ReservationForm } from './ReservationForm';
import { ReservationOpeningInfo } from './ReservationOpeningInfo';

export const ReservationContainer = () => {
    return (
        <div className="wrapper">
            <div className="container-fluid">
                <div className=" section-content">
                    <div className="row">
                        <div className="col-md-5 col-sm-6">
                            <ReservationForm />
                        </div>
                        <div className="col-md-2 hidden-sm hidden-xs"></div>
                        <div className="col-md-4 col-sm-6 col-xs-12">
                            <ReservationOpeningInfo />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
import React, { Component } from 'react';

export class ReservationForm extends Component {
    render() {
        return (
            <form className="reservation-form" method="post" action="reserve.php">
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                            <input type="text" className="form-control reserve-form empty iconified" name="name" id="name" required="required" placeholder="  &#xf007;  Name" />
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" className="form-control reserve-form empty iconified" id="email" required="required" placeholder="  &#xf1d8;  e-mail" />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                            <input type="tel" className="form-control reserve-form empty iconified" name="phone" id="phone" required="required" placeholder="  &#xf095;  Phone" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control reserve-form empty iconified" name="datepicker" id="datepicker" required="required" placeholder="&#xf017;  Time" />
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12">
                        <textarea type="text" name="message" className="form-control reserve-form empty iconified" id="message" rows="3" required="required" placeholder="  &#xf086;  We're listening"></textarea>
                    </div>
                    <div className="col-md-12 col-sm-12">
                        <button type="submit" id="submit" name="submit" className="btn btn-reservation">
                            <span><i className="fa fa-check-circle-o"></i></span>
                            Make a reservation
                        </button>
                    </div>
                </div>
            </form>
        )
    }
}
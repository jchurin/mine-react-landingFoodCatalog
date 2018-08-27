import React, { Component } from 'react';

export class ReservationForm extends Component {

    constructor() {
        super();
        this.state = {
            inputName: '',
            inputPhone: '',
            inputEmail: '',
            inputDatepicker: '',
            inputMessage: '',
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <form className="reservation-form" onSubmit={ this.handleSubmit }>
                <div className="row">
                    <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                            <input 
                            type="text" 
                            className="form-control reserve-form empty iconified" 
                            name="name" 
                            id="name" 
                            required="required" 
                            placeholder="  &#xf007;  Name" 
                            onChange={ e => this.setState({ inputName: e.target.value }) }
                            ref={ inputElement => this.inputName = inputElement }
                            value={ this.state.inputName }
                            />
                        </div>
                        <div className="form-group">
                            <input 
                            type="email" 
                            name="email" 
                            className="form-control reserve-form empty iconified" 
                            id="email" 
                            required="required" 
                            placeholder="  &#xf1d8;  e-mail" 
                            onChange={ e => this.setState({ inputEmail: e.target.value }) }
                            ref={ inputElement => this.inputEmail = inputElement }
                            value={ this.state.inputEmail }
                            />
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <div className="form-group">
                            <input 
                            type="tel" 
                            className="form-control reserve-form empty iconified" 
                            name="phone" 
                            id="phone" 
                            required="required" 
                            placeholder="  &#xf095;  Phone" 
                            onChange={ e => this.setState({ inputPhone: e.target.value }) }
                            ref={ inputElement => this.inputPhone = inputElement }
                            value={ this.state.inputPhone }
                            />
                        </div>
                        <div className="form-group">
                            <input 
                            type="text" 
                            className="form-control reserve-form empty iconified" 
                            name="datepicker" 
                            id="datepicker" 
                            required="required" 
                            placeholder="&#xf017;  Time" 
                            onChange={ e => this.setState({ inputDatepicker: e.target.value }) }
                            ref={ inputElement => this.inputDatepicker = inputElement }
                            value={ this.state.inputDatepicker }
                            />
                        </div>
                    </div>
                    <div className="col-md-12 col-sm-12">
                        <textarea 
                        type="text" 
                        name="message" 
                        className="form-control reserve-form empty iconified" 
                        id="message" 
                        rows="3" 
                        required="required" 
                        placeholder="  &#xf086;  We're listening"
                        onChange={ e => this.setState({ inputMessage: e.target.value }) }
                        ref={ inputElement => this.inputMessage = inputElement }
                        value={ this.state.inputMessage }
                        ></textarea>
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
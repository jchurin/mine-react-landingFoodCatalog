import React, { Component } from 'react';

export class FormContact extends Component {

    constructor() {
        super();
        this.state = {
            inputName: '',
            inputEmail: '',
            inputSubject: '',
            inputMessage: ''
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render() {
        return (
            <section className="contact-form">
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1">
                            <div className="row">
                                <form className="contact-form" onSubmit={ this.handleSubmit }>

                                    <div className="col-md-6 col-sm-6">
                                        <div className="form-group">
                                            <input 
                                            name="name" 
                                            type="text" 
                                            className="form-control" 
                                            id="name" 
                                            required="required" 
                                            placeholder="  Name" 
                                            placeholder="  Name" 
                                            onChange={ e => this.setState({ inputName: e.target.value }) }
                                            ref={ inputElement => this.inputName = inputElement }
                                            value={ this.state.inputName }
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input 
                                            name="email" 
                                            type="email" 
                                            className="form-control" 
                                            id="email" 
                                            required="required" 
                                            placeholder="  Email" 
                                            onChange={ e => this.setState({ inputEmail: e.target.value }) }
                                            ref={ inputElement => this.inputEmail = inputElement }
                                            value={ this.state.inputEmail }
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input 
                                            name="subject" 
                                            type="text" 
                                            className="form-control" 
                                            id="subject" 
                                            required="required" 
                                            placeholder="  Subject" 
                                            onChange={ e => this.setState({ inputSubject: e.target.value }) }
                                            ref={ inputElement => this.inputSubject = inputElement }
                                            value={ this.state.inputSubject }
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-sm-6">
                                        <textarea 
                                        name="message" 
                                        type="text" 
                                        className="form-control" 
                                        id="message" 
                                        rows="7" 
                                        required="required" 
                                        placeholder="  Message"
                                        onChange={ e => this.setState({ inputMessage: e.target.value }) }
                                        ref={ inputElement => this.inputMessage = inputElement }
                                        value={ this.state.inputMessage }
                                        ></textarea>
                                    </div>

                                    <div className="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3">
                                        <div className="text-center">
                                            <button type="submit" id="submit" name="submit" className="btn btn-send">Send </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
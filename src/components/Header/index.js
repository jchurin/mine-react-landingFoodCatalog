import React, { Component } from 'react';
import { ItemContainer } from './ItemContainer';
import { Link } from 'react-router-dom';

export default class Header extends Component {

    render() {
        return (
            <div>
                <nav id="template-navbar" className="navbar navbar-default custom-navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#Food-fair-toggle">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link to="#header-slider" className="navbar-brand">
                                <img id="logo" src={require('../../assets/images/Logo_main.png')} className="logo img-responsive" alt="logo"/>
                            </Link>
                        </div>

                        <ItemContainer/>

                    </div>
                </nav>
            </div>
        )
    }

}
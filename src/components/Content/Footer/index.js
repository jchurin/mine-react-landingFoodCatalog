import React, { Component } from 'react';
import { WEB_SITE_NAME } from '../../../constants/footer.constants';
import { Link } from 'react-router-dom';

export class Footer extends Component {

    constructor() {
        super();
        this.state = {
            webSiteName: WEB_SITE_NAME
        }
    }

    _getCurrentYear = () => {
        return (new Date()).getFullYear();
    }

    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3">
                            <div className="copyright text-center">
                                <p>
                                    &copy; Copyright, 2015 - {this._getCurrentYear()} <Link to="/">{this.state.webSiteName}</Link> Theme by <Link to="//www.themewagon.com" target="_blank">ThemeWagon</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
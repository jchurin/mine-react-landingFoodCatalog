import React, { Component } from 'react';

export class GratePlaceToEnjoy extends Component {
    render() {
        return (
            <section id="great-place-to-enjoy" className="great-place-to-enjoy">
                <img className="img-responsive section-icon hidden-sm hidden-xs" src={require("../../../assets/images/icons/beer_black.png")} />
                <div className="wrapper">
                    <div className="container-fluid">
                        <div className="row dis-table">
                            <div className="col-xs-6 col-sm-6 dis-table-cell color-bg">
                                <h2 className="section-title">Great Place to enjoy</h2>
                            </div>
                            <div className="col-xs-6 col-sm-6 dis-table-cell section-bg">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
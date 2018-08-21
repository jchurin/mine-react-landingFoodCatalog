import React, { Component } from 'react';

export class Breakfast extends Component {
    render() {
        return (
            <section id="breakfast" class="breakfast">
                <img class="img-responsive section-icon hidden-sm hidden-xs" src={require("../../../assets/images/icons/bread_black.png")} />
                <div class="wrapper">
                    <div class="container-fluid">
                        <div class="row dis-table">
                            <div class="col-xs-6 col-sm-6 dis-table-cell color-bg">
                                <h2 class="section-title">Our Breakfast Menu</h2>
                            </div>
                            <div class="col-xs-6 col-sm-6 dis-table-cell section-bg"></div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
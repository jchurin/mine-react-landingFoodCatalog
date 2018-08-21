import React, { Component } from 'react';

export class FeaturedDish extends Component {
    render() {
        return (
            <section id="featured-dish" class="featured-dish">
                <img class="img-responsive section-icon hidden-sm hidden-xs" src={require("../../../assets/images/icons/food_black.png")} />
                <div class="wrapper">
                    <div class="container-fluid">
                        <div class="row dis-table">
                            <div class="col-xs-6 col-sm-6 dis-table-cell color-bg">
                                <h2 class="section-title">Our Featured Dishes Menu</h2>
                            </div>
                            <div class="col-xs-6 col-sm-6 dis-table-cell section-bg"></div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
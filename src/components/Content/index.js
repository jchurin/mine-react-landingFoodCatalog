import React, { Component } from 'react';
import { CarouselHeader } from './CarouselHeader';
import { About } from './About';

export class Content extends Component {
    render() {
        return (
            <div>
                <CarouselHeader />
                <About />

                <section id="pricing" className="pricing">
                    <div id="w">
                        <div className="pricing-filter">
                            <div className="pricing-filter-wrapper">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-10 col-md-offset-1">
                                            <div className="section-header">
                                                <h2 className="pricing-title">Affordable Pricing</h2>
                                                <ul id="filter-list" className="clearfix">
                                                    <li className="filter" data-filter="all">All</li>
                                                    <li className="filter" data-filter=".breakfast">Breakfast</li>
                                                    <li className="filter" data-filter=".special">Special</li>
                                                    <li className="filter" data-filter=".desert">Desert</li>
                                                    <li className="filter" data-filter=".dinner">Dinner</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="container">
                            <div className="row">
                                <div className="col-md-10 col-md-offset-1">
                                    <ul id="menu-pricing" className="menu-price">
                                        <li className="item dinner">

                                            <span href="#">
                                                <img src="images/food1.jpg" className="img-responsive" alt="Food" />
                                                <div className="menu-desc text-center">
                                                    <span>
                                                        <h3>Tomato Curry</h3>
                                                        Natalie &amp; Justin Cleaning by Justin Younger
                                            </span>
                                                </div>
                                            </span>

                                            <h2 className="white">$20</h2>
                                        </li>

                                        <li className="item breakfast">

                                            <span href="#">
                                                <img src="images/food2.jpg" className="img-responsive" alt="Food" />
                                                <div className="menu-desc">
                                                    <span>
                                                        <h3>Prawn Dish</h3>
                                                        Lorem ipsum dolor sit amet
                                            </span>
                                                </div>
                                            </span>

                                            <h2 className="white">$20</h2>
                                        </li>
                                        <li className="item desert">

                                            <span href="#">
                                                <img src="images/food3.jpg" className="img-responsive" alt="Food" />
                                                <div className="menu-desc">
                                                    <span>
                                                        <h3>Salad Dish</h3>
                                                        Consectetur adipisicing elit, sed do eiusmod
                                            </span>
                                                </div>
                                            </span>

                                            <h2 className="white">$18</h2>
                                        </li>
                                        <li className="item breakfast special">

                                            <span href="#">
                                                <img src="images/food4.jpg" className="img-responsive" alt="Food" />
                                                <div className="menu-desc">
                                                    <span>
                                                        <h3>Prawn Dish</h3>
                                                        Tempor incididunt ut labore et dolore
                                            </span>
                                                </div>
                                            </span>

                                            <h2 className="white">$15</h2>
                                        </li>
                                        <li className="item breakfast">

                                            <span href="#">
                                                <img src="images/food5.jpg" className="img-responsive" alt="Food" />
                                                <div className="menu-desc">
                                                    <span>
                                                        <h3>Vegetable Dish</h3>
                                                        Magna aliqua. Ut enim ad minim veniam
                                            </span>
                                                </div>
                                            </span>

                                            <h2 className="white">$20</h2>
                                        </li>
                                        <li className="item dinner special">

                                            <span href="#">
                                                <img src="images/food6.jpg" className="img-responsive" alt="Food" />
                                                <div className="menu-desc">
                                                    <span>
                                                        <h3>Chicken Dish</h3>
                                                        Quis nostrud exercitation ullamco laboris
                                            </span>
                                                </div>
                                            </span>

                                            <h2 className="white">$22</h2>
                                        </li>
                                        <li className="item desert">

                                            <span href="#">
                                                <img src="images/food7.jpg" className="img-responsive" alt="Food" />
                                                <div className="menu-desc">
                                                    <span>
                                                        <h3>Vegetable Noodles</h3>
                                                        Nisi ut aliquip ex ea commodo
                                            </span>
                                                </div>
                                            </span>

                                            <h2 className="white">$32</h2>
                                        </li>
                                        <li className="item dinner">

                                            <span href="#">
                                                <img src="images/food8.jpg" className="img-responsive" alt="Food" />
                                                <div className="menu-desc">
                                                    <span>
                                                        <h3>Special Salad</h3>
                                                        Duis aute irure dolor in reprehenderit
                                            </span>
                                                </div>
                                            </span>

                                            <h2 className="white">$38</h2>
                                        </li>
                                        <li className="item desert special">

                                            <span href="#">
                                                <img src="images/food9.jpg" className="img-responsive" alt="Food" />
                                                    <div className="menu-desc">
                                                        <span>
                                                            <h3>Ice-cream</h3>
                                                            Excepteur sint occaecat cupidatat non
                                            </span>
                                                    </div>
                                    </span>

                                                <h2 className="white">$38</h2>
                                </li>  
                            </ul>

                                        {/* <div className="text-center">
                                            <span id="loadPricingContent" className="btn btn-middle hidden-sm hidden-xs">Load More <span className="caret"></span></span>
                                        </div> */}
            
                        </div>
                                </div>
                            </div>

                        </div> 
        </section>


                    </div>
                )
            }
}
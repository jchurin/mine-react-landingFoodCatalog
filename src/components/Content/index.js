import React, { Component } from 'react';
import { CarouselHeader } from './CarouselHeader';
import { About } from './About';
import { Pricing } from './Pricing';
import { GratePlaceToEnjoy } from './GratePlaceToEnjoy';
import { Beer } from './Beer';
import { Breakfast } from './Breakfast';
import { Bread } from './Bread';
import { FeaturedDish } from './FeaturedDish';
import { Menu } from './Menu';

export class Content extends Component {
    render() {
        return (
            <div>
                <CarouselHeader />
                <About />
                <Pricing />
                <GratePlaceToEnjoy />
                <Beer />
                <Breakfast />
                <Bread />
                <FeaturedDish />
                <Menu />

                <section id="have-a-look" class="have-a-look hidden-xs">
                    <img class="img-responsive section-icon hidden-sm hidden-xs" src="images/icons/food_color.png" />
                    <div class="wrapper">
                        <div class="container-fluid">
                            <div class="row">

                                <div class="menu-gallery" style={{width: "50%", float: "left"}}>
                                    <div class="flexslider-container">
                                        <div class="flexslider">
                                            <ul class="slides">
                                                <li>
                                                    <img src="images/menu-gallery/menu1.png" />
                                                </li>
                                                <li>
                                                    <img src="images/menu-gallery/menu2.jpg" />
                                                </li>
                                                <li>
                                                    <img src="images/menu-gallery/menu3.png" />
                                                </li>
                                                <li>
                                                    <img src="images/menu-gallery/menu4.jpg" />
                                                </li>
                                                <li>
                                                    <img src="images/menu-gallery/menu5.jpg" />
                                                </li>
                                                <li>
                                                    <img src="images/menu-gallery/menu6.jpg" />
                                                </li>
                                                <li>
                                                    <img src="images/menu-gallery/menu7.jpg" />
                                                </li>
                                                <li>
                                                    <img src="images/menu-gallery/menu8.jpg" />
                                                </li>
                                                <li>
                                                    <img src="images/menu-gallery/menu9.jpg" />
                                                </li>
                                                <li>
                                                    <img src="images/menu-gallery/menu10.jpg" />
                                                </li>
                                                <li>
                                                    <img src="images/menu-gallery/menu11.jpg" />
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div class="gallery-heading hidden-xs color-bg" style={{width: "50%", float: "right"}}>
                                    <h2 class="section-title">Have A Look To Our Dishes</h2>
                                </div>


                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}
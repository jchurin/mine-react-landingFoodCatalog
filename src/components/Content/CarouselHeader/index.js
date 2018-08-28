import React from 'react';
import { ItemCarousel } from './ItemCarousel';

export const CarouselHeader = () => {
    return (
        <section id="header-slider" className="owl-carousel">
            <ItemCarousel
            orientationText="text-left pull-left"
            title="BEST FOOD"
            subTitle="create your own slogan"
            />
            <ItemCarousel
            orientationText="text-left pull-left"
            title="BEST SNACKS"
            subTitle="create your own slogan"
            />
            <ItemCarousel
            orientationText="text-right pull-right"
            title="BEST DRINKS"
            subTitle="create your own slogan"
            />
        </section>
    );
}
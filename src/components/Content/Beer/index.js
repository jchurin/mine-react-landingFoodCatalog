import React, { Component } from 'react';
import { PresentationalWrapperWithDescription } from '../../Shared/PresentationalWrapperWithDescription';

export class Beer extends Component {
    render() {
        return (
            <section id="beer" className="beer">
                <PresentationalWrapperWithDescription
                    imgPath="beer_color"
                    title="Our Beer">
                    <p className="section-content-para">
                        Astronomy compels the soul to look upward, and leads us from this world to another.  Curious that we spend more time congratulating people who have succeeded than encouraging people who have not. As we got further and further away, it [the Earth] diminished in size.
                    </p>
                    <p className="section-content-para">
                        beautiful, warm, living object looked so fragile, so delicate, that if you touched it with a finger it would crumble and fall apart. Seeing this has to change a man.  Where ignorance lurks, so too do the frontiers of discovery and imagination.Astronomy compels the soul to look upward, and leads us from this world to another.  Curious that we spend more time congratulating people who have succeeded than encouraging people who have not. As we got further and further away, it [the Earth] diminished in size.
                    </p>
                </PresentationalWrapperWithDescription>
            </section>
        )
    }
}
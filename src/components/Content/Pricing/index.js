import React, { Component } from 'react';
import { FilterContainer } from './FilterContainer';
import { ResultContainer } from './ResultContainer';

export class Pricing extends Component {
    render() {
        return (
            <section id="pricing" className="pricing">
                <div id="w">
                    <FilterContainer />
                    <ResultContainer />
                </div>
            </section>

        )
    }
}
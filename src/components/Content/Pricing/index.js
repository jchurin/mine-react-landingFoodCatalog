import React from 'react';
import { FilterContainer } from './FilterContainer';
import { ResultContainer } from './ResultContainer';

export const Pricing = () => {
    return (
        <section id="pricing" className="pricing">
            <div id="w">
                <FilterContainer />
                <ResultContainer />
            </div>
        </section>
    );
}
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class FilterItem extends Component {

    static propTypes = {
        dataFilter: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
    }

    render() {
        const { dataFilter, label } = this.props;
        return (
            <li className="filter" data-filter={dataFilter}>{label}</li>
        );
    }
}
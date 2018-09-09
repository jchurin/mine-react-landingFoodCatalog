import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export class ResultItem extends Component {

    static propTypes = {
        categories: PropTypes.array,
        img: PropTypes.object.isRequired,
        title: PropTypes.string.isRequired,
        subtitle: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired
    };

    render() {

        const { categories, img, title, subtitle, amount } = this.props;
        const { path, alt } = img;

        return (
            <li className={`item ${categories.join(" ")}`}>

                <Link to="#">
                    <img src={require(`../../../assets/images/food${path}.jpg`)} className="img-responsive" alt={alt} />
                    <div className="menu-desc text-center">
                        <span>
                            <h3>{title}</h3>
                            {subtitle}
                        </span>
                    </div>
                </Link>
                <h2 className="white">{`$${amount}`}</h2>
            </li>
        );
    }
}
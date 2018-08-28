import React, { Component } from 'react';
import { MENU } from '../../../constants/menu.constants';
import { MenuItem } from './MenuItem';

export class Menu extends Component {

    getColumns = () => {
        return MENU.map((item, index) => {
            return (
                <div key={index} className="col-md-3 col-sm-6 col-xs-12">
                    <div className="row">
                        <div className="menu-catagory">
                            <h2>{item.title}</h2>
                        </div>
                    </div>
                    {
                        item.dishes.map((item, index) => {
                            return (
                                <div key={index} className="row">
                                    <MenuItem
                                        title={item.title}
                                        description={item.description}
                                        perHead={item.perHead}
                                        amount={item.amount}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            );
        });
    }

    render() {
        return (
            <section id="menu-list" className="menu-list">
                <div className="container">
                    <div className="row menu">
                        <div className="col-md-10 col-md-offset-1 col-sm-9 col-sm-offset-2 col-xs-12">
                            <div className="row">{this.getColumns()}</div>
                            <div id="moreMenuContent"></div>
                            {/* <div className="text-center">
                                <a id="loadMenuContent" className="btn btn-middle hidden-sm hidden-xs">Load More <span className="caret"></span></a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
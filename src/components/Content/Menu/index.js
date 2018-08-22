import React, { Component } from 'react';
import { MENU } from '../../../constants/menu.constants';
import { MenuItem } from './MenuItem';

export class Menu extends Component {

    getColumns = () => {
        return MENU.map((item, index) => {
            return (
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="row">
                        <div class="menu-catagory">
                            <h2>{item.title}</h2>
                        </div>
                    </div>
                    {
                        item.dishes.map((item, index) => {
                            return (
                                <div className="row">
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
            )
        });
    }

    render() {
        return (
            <section id="menu-list" class="menu-list">
                <div class="container">
                    <div class="row menu">
                        <div class="col-md-10 col-md-offset-1 col-sm-9 col-sm-offset-2 col-xs-12">
                            <div class="row">{this.getColumns()}</div>
                            <div id="moreMenuContent"></div>
                            <div class="text-center">
                                <a id="loadMenuContent" class="btn btn-middle hidden-sm hidden-xs">Load More <span class="caret"></span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
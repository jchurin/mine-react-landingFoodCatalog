import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './assets/css/owl.carousel.css';
import './assets/css/owl.theme.css';
import 'animate.css/animate.css';
import 'flexslider/flexslider.css';

import $ from 'jquery';
import jquery from 'jquery';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

window.$ = window.jQuery = jquery;
require('flexslider/jquery.flexslider');
require('bootstrap/dist/js/bootstrap.min');
require('./assets/js/owl.carousel.min');
require('./assets/js/jQuery.scrollSpeed');
require('./assets/js/scripts');

$(document).ready(function () {
    $('.flexslider').flexslider({
        animation: "slide",
        controlsContainer: ".flexslider-container"
    });
});

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App} />
            {/* <Route path="/list" component={List} /> */}
        </div>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();

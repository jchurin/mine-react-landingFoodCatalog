// CSS imports
import './assets/css/bootstrap.min.css';
import './assets/css/font-awesome.min.css';
import './assets/css/owl.carousel.css';
import './assets/css/owl.theme.css';
import './assets/css/animate.css';
import './assets/css/flexslider.css';
import './assets/css/pricing.css';
import './assets/css/main.css';
import './index.scss';

// JS imports
import jquery from 'jquery';
import $ from 'jquery';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

window.$ = window.jQuery = jquery;
require('./assets/js/jquery.flexslider.min');
require('./assets/js/bootstrap.min');
require('./assets/js/owl.carousel.min');
require('./assets/js/jquery.mixitup');
require('./assets/js/wow.min');
require('./assets/js/jquery.validate');
// require('./assets/js/jquery.hoverdir');
require('./assets/js/jQuery.scrollSpeed');
require('./assets/js/script');

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

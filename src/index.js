import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'owl.carousel/src/scss/owl.carousel.scss';
import 'owl.carousel/src/scss/owl.theme.default.scss';
import 'animate.css/animate.css';
import 'flexslider/flexslider.css';

import $ from 'jquery';
import jquery from 'jquery';
import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.min';

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

window.$ = window.jQuery = jquery;
require('flexslider/jquery.flexslider');
require('bootstrap/dist/js/bootstrap.min');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

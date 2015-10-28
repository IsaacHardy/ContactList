import $ from 'jquery';
import Router from './router';

import './ajax_setup';

let appElement = $('.app');

let router = new Router(appElement);
router.start();

"use strict";
var core_1 = require('@angular/core');
var browser_1 = require('@angular/platform/browser');
var router_1 = require('@angular/router-deprecated');
var http_1 = require('@angular/http');
require('jquery');
require('bootstrap-loader');
var ENV_PROVIDERS = [];
ENV_PROVIDERS.push(browser_1.ELEMENT_PROBE_PROVIDERS);
var app_1 = require('./app/app');
document.addEventListener('DOMContentLoaded', function main() {
    browser_1.bootstrap(app_1.App, ENV_PROVIDERS.concat(http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, [
        core_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })
    ]))
        .catch(function (err) { return console.error(err); });
});

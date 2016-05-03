import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {SubcontractService} from "../../../../services/subcontract-service";/*
* Services
*/

const DETAIL_TEMPLATE = require('./scope.html');

@Component({

 selector: "scope",

 template: DETAIL_TEMPLATE

})

//template: '<p>Details</p>'

export class Scope  {
 subcontract: Object = {};
 submitted = false;

 constructor(public subcontractService:SubcontractService) {
   this.subcontract = subcontractService.theSubcontract;

 }


 onSubmit(value) {
   this.submitted = true;
   console.log('onSubmit');
 }

}

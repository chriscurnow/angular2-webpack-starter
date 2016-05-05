﻿model.forecast = new DataClass("forecasts", "public");model.forecast.id = new Attribute("storage","uuid", "key auto", {autogenerate:true});model.forecast.number = new Attribute("storage", "long");model.forecast.forecastDate = new Attribute("storage", "date");model.forecast.amount_int = new Attribute("storage", "long64");model.forecast.amount = new Attribute("calculated", "string");model.forecast.details = new Attribute("storage", "string");model.forecast.fcstCostCode = new Attribute("relatedEntity", "costCode", "costCode");model.forecast.fcstProject = new Attribute("relatedEntity", "project", "project");model.forecast.methods.importJSON = function(jsonString){		ds.forecast.all().remove();                 var objCollection = JSON.parse(jsonString);   			    objCollection.forEach( function(theObject) { 		     		    	var theProject = ds.project.find('uid_project == :1', theObject.uid_project);		    	var theCostCode = ds.costCode.find('id == :1', theObject.uid_ccod);		   		//var theUser = ds.user.find('uid_user = :1', theObject.uid_user);		     				     theForecast = new ds.forecast({				     					     					     	number			: theObject.fcstNumber,				     	forecastDate	: theObject.fcstDate,				     	amount_int		: theObject.CostCodeAmount * multiplier,				     	fcstProject		: theProject,				     	fcstCostCode	: theCostCode				     					     });		     		    theForecast.save();		      		  });	}var multiplier = 1000000;
﻿model.email = new DataClass("emailAddresses", "public");model.email.uid_email = new Attribute("storage","uuid", "key auto", {autogenerate:true});model.email.emailAddress = new Attribute("storage", "string");model.email.description = new Attribute("storage", "string");model.email.company = new Attribute("relatedEntity", "company", "company");
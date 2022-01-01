"use strict";

const express = require("express"),
	router = express(),
	validateInput = require("../controllers/middleware/validation/validateSearchInput"),
	getMatchedClinics = require("../controllers/middleware/getMatchedClinics"),
	renderSearchPage = require("../controllers/middleware/renderSearchPage");

router.post("/", validateInput, getMatchedClinics);

router.get("/", renderSearchPage);

module.exports = router;

"use strict";

const express = require("express"),
	router = express(),
	validateInput = require("../middleware/validation/validateSearchInput"),
	getMatchedClinics = require("../controllers/getMatchedClinics"),
	renderSearchPage = require("../controllers/renderSearchPage");

router.post("/", validateInput, getMatchedClinics);

router.get("/", renderSearchPage);

module.exports = router;

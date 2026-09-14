const express = require("express");

const {
    getAllStates,
    getState,
    getStateCategory
} = require("../controllers/statecontrollers");

const router = express.Router();

router.get("/", getAllStates);

router.get("/:state", getState);

router.get("/:state/category/:category", getStateCategory);

module.exports = router;
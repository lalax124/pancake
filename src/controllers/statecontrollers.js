const states = require("../data/states.json");

function getAllStates(req, res) {
    const stateList = Object.keys(states).map((key) => ({
        id: key,
        name: states[key].name
    }));

    res.json(stateList);
}

function getState(req, res) {
    const stateName = req.params.state.toLowerCase();

    const state = states[stateName];

    if (!state) {
        return res.status(404).json({
            error: "State not found"
        });
    }

    res.json(state);
}

function getStateCategory(req, res) {
    const stateName = req.params.state.toLowerCase();
    const category = req.params.category.toLowerCase();

    const state = states[stateName];

    if (!state) {
        return res.status(404).json({
            error: "State not found"
        });
    }

    if (!state[category]) {
        return res.status(404).json({
            error: "Category not found"
        });
    }

    res.json({
        state: state.name,
        category: category,
        data: state[category]
    });
}

module.exports = {
    getAllStates,
    getState,
    getStateCategory
};
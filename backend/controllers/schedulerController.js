const fcfsAlgorithm = require("../utils/fcfs");
const sjfAlgorithm = require("../utils/sjf");
const priorityAlgorithm = require("../utils/priority");
const roundRobinAlgorithm = require("../utils/roundRobin");

// FCFS
const fcfs = (req, res) => {
    try {
        const { processes } = req.body;
        res.json(fcfsAlgorithm(processes));
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// SJF
const sjf = (req, res) => {
    try {
        const { processes } = req.body;
        res.json(sjfAlgorithm(processes));
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Priority
const priority = (req, res) => {
    try {
        const { processes } = req.body;
        res.json(priorityAlgorithm(processes));
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Round Robin
const roundRobin = (req, res) => {
    try {
        const { processes, quantum } = req.body;
        res.json(roundRobinAlgorithm(processes, quantum));
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    fcfs,
    sjf,
    priority,
    roundRobin
};
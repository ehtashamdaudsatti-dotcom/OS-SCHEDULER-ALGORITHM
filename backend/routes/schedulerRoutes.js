const express = require("express");

const router = express.Router();

const {
    fcfs,
    sjf,
    priority,
    roundRobin
} = require("../controllers/schedulerController");

router.post("/fcfs", fcfs);
router.post("/sjf", sjf);
router.post("/priority", priority);
router.post("/roundrobin", roundRobin);

module.exports = router;
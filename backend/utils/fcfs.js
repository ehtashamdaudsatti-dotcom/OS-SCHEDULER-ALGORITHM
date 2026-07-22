function fcfs(processes) {

    let currentTime = 0;

    const gantt = [];

    processes.forEach(process => {

        gantt.push({
            process: process.name,
            start: currentTime,
            end: currentTime + process.burst
        });

        currentTime += process.burst;

    });

    return gantt;
}

module.exports = fcfs;
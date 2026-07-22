function priority(processes) {

    const sortedProcesses = [...processes].sort(
        (a, b) => a.priority - b.priority
    );

    let currentTime = 0;

    const gantt = [];

    sortedProcesses.forEach(process => {

        gantt.push({
            process: process.name,
            priority: process.priority,
            start: currentTime,
            end: currentTime + process.burst
        });

        currentTime += process.burst;

    });

    return gantt;
}

module.exports = priority;
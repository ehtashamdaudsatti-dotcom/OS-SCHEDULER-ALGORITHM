function roundRobin(processes, quantum) {

    const queue = processes.map(process => ({
        ...process,
        remaining: process.remaining ?? process.burst
    }));

    let currentTime = 0;

    const gantt = [];

    while (queue.length > 0) {

        const process = queue.shift();

        const execution = Math.min(process.remaining, quantum);

        gantt.push({
            process: process.name,
            start: currentTime,
            end: currentTime + execution
        });

        currentTime += execution;

        process.remaining -= execution;

        if (process.remaining > 0) {
            queue.push(process);
        }
    }

    return gantt;
}

module.exports = roundRobin;
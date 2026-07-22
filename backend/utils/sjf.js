function sjf(processes) {

    const sortedProcesses = [...processes].sort(
        (a, b) => a.burst - b.burst
    );

    let currentTime = 0;

    const gantt = [];

    sortedProcesses.forEach(process => {

        gantt.push({

            process: process.name,

            start: currentTime,

            end: currentTime + process.burst

        });

        currentTime += process.burst;

    });

    return gantt;

}

module.exports = sjf;
import React, { useState } from "react";
import "../styles/scheduler.css";
export default function Priority() {
  const [processInput, setProcessInput] = useState("P1,5,2\nP2,3,1\nP3,7,3");
  const [result, setResult] = useState([]);

  const simulate = () => {
    const processes = processInput
      .trim()
      .split("\n")
      .map((line) => {
        const [name, burst, priority] = line.split(",");

        return {
          name: name.trim(),
          burst: parseInt(burst.trim(), 10),
          priority: parseInt(priority.trim(), 10),
        };
      });

    const sortedProcesses = [...processes].sort(
      (a, b) => a.priority - b.priority
    );

    let currentTime = 0;
    const output = [];

    sortedProcesses.forEach((process) => {
      const waiting = currentTime;
      const turnaround = waiting + process.burst;

      output.push({
        process: process.name,
        burst: process.burst,
        priority: process.priority,
        waiting,
        turnaround,
        start: currentTime,
        end: turnaround,
      });

      currentTime += process.burst;
    });

    setResult(output);
  };

  const averageWaiting =
    result.length > 0
      ? (
          result.reduce((sum, item) => sum + item.waiting, 0) /
          result.length
        ).toFixed(2)
      : 0;

  const averageTurnaround =
    result.length > 0
      ? (
          result.reduce((sum, item) => sum + item.turnaround, 0) /
          result.length
        ).toFixed(2)
      : 0;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Priority Scheduling Simulator</h2>

      <p>Enter one process per line (Name,Burst,Priority):</p>

      <textarea
        rows={6}
        cols={35}
        value={processInput}
        onChange={(e) => setProcessInput(e.target.value)}
      />

      <br />
      <br />

      <button onClick={simulate}>Simulate</button>

      {result.length > 0 && (
        <>
          <h3>Gantt Chart</h3>

          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {result.map((item, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid black",
                  padding: "15px",
                  margin: "5px",
                  minWidth: "90px",
                  textAlign: "center",
                }}
              >
                <strong>{item.process}</strong>

                <br />

                Priority: {item.priority}

                <br />

                {item.start} - {item.end}
              </div>
            ))}
          </div>

          <h3>Process Table</h3>

          <table
            border="1"
            cellPadding="8"
            style={{ borderCollapse: "collapse" }}
          >
            <thead>
              <tr>
                <th>Process</th>
                <th>Burst</th>
                <th>Priority</th>
                <th>Waiting</th>
                <th>Turnaround</th>
              </tr>
            </thead>

            <tbody>
              {result.map((item, index) => (
                <tr key={index}>
                  <td>{item.process}</td>
                  <td>{item.burst}</td>
                  <td>{item.priority}</td>
                  <td>{item.waiting}</td>
                  <td>{item.turnaround}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Average Waiting Time : {averageWaiting}</h3>

          <h3>Average Turnaround Time : {averageTurnaround}</h3>
        </>
      )}
    </div>
  );
}
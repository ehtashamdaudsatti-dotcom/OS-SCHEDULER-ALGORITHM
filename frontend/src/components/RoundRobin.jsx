import React, { useState } from "react";
import "../styles/scheduler.css";
export default function RoundRobin() {
  const [processInput, setProcessInput] = useState("P1,5\nP2,3\nP3,7");
  const [quantum, setQuantum] = useState(2);
  const [result, setResult] = useState([]);

  const simulate = () => {
    const processes = processInput
      .trim()
      .split("\n")
      .map((line) => {
        const [name, burst] = line.split(",");

        return {
          name: name.trim(),
          burst: parseInt(burst.trim(), 10),
          remaining: parseInt(burst.trim(), 10),
        };
      });

    const queue = [...processes];
    const gantt = [];
    let currentTime = 0;

    while (queue.length > 0) {
      const process = queue.shift();

      const execution = Math.min(process.remaining, quantum);

      gantt.push({
        process: process.name,
        start: currentTime,
        end: currentTime + execution,
      });

      currentTime += execution;
      process.remaining -= execution;

      if (process.remaining > 0) {
        queue.push(process);
      }
    }

    const table = processes.map((process) => {
      const lastExecution = gantt
        .filter((g) => g.process === process.name)
        .pop();

      const turnaround = lastExecution.end;
      const waiting = turnaround - process.burst;

      return {
        process: process.name,
        burst: process.burst,
        waiting,
        turnaround,
      };
    });

    setResult({
      gantt,
      table,
    });
  };

  const averageWaiting =
    result.table && result.table.length > 0
      ? (
          result.table.reduce((sum, p) => sum + p.waiting, 0) /
          result.table.length
        ).toFixed(2)
      : 0;

  const averageTurnaround =
    result.table && result.table.length > 0
      ? (
          result.table.reduce((sum, p) => sum + p.turnaround, 0) /
          result.table.length
        ).toFixed(2)
      : 0;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Round Robin Scheduling Simulator</h2>

      <p>Enter one process per line (Name,Burst):</p>

      <textarea
        rows={6}
        cols={30}
        value={processInput}
        onChange={(e) => setProcessInput(e.target.value)}
      />

      <br />
      <br />

      <label>
        Time Quantum:
        <input
          type="number"
          min="1"
          value={quantum}
          onChange={(e) => setQuantum(Number(e.target.value))}
          style={{ marginLeft: "10px" }}
        />
      </label>

      <br />
      <br />

      <button onClick={simulate}>Simulate</button>

      {result.gantt && (
        <>
          <h3>Gantt Chart</h3>

          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {result.gantt.map((item, index) => (
              <div
                key={index}
                style={{
                  border: "1px solid black",
                  padding: "15px",
                  margin: "5px",
                  minWidth: "80px",
                  textAlign: "center",
                }}
              >
                <strong>{item.process}</strong>

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
                <th>Waiting</th>
                <th>Turnaround</th>
              </tr>
            </thead>

            <tbody>
              {result.table.map((item, index) => (
                <tr key={index}>
                  <td>{item.process}</td>
                  <td>{item.burst}</td>
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
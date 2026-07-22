# CPU Scheduling Algorithms Simulator

A professional web-based CPU Scheduling Simulator built using **React.js**, **Node.js**, and **Express.js**. This project simulates four popular CPU Scheduling Algorithms and displays their execution using Gantt Charts, Process Tables, Waiting Time, and Turnaround Time.

---

## Features

- First Come First Serve (FCFS)
- Shortest Job First (SJF)
- Priority Scheduling
- Round Robin Scheduling
- Interactive User Interface
- Gantt Chart Visualization
- Process Table
- Waiting Time Calculation
- Turnaround Time Calculation
- Average Waiting Time
- Average Turnaround Time
- Responsive Design

---

## Technologies Used

### Frontend

- React.js
- HTML5
- CSS3
- JavaScript
- Axios

### Backend

- Node.js
- Express.js
- CORS
- Dotenv

---

## Project Structure

```
OS-SCHEDULER-ALGORITHM
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── utils
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── styles
│   ├── package.json
│   └── App.jsx
│
└── README.md
```

---

## Algorithms Included

### 1. First Come First Serve (FCFS)

Processes are executed in the order they arrive.

### 2. Shortest Job First (SJF)

Processes are executed based on the shortest burst time.

### 3. Priority Scheduling

Processes are executed according to their priority.

### 4. Round Robin Scheduling

Processes are executed using a fixed time quantum.

---

## Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/OS-SCHEDULER-ALGORITHM.git
```

---

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

Runs on

```
http://localhost:3000
```

---

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

Runs on

```
http://localhost:5000
```

---

## API Endpoints

### FCFS

```
POST /api/fcfs
```

### SJF

```
POST /api/sjf
```

### Priority

```
POST /api/priority
```

### Round Robin

```
POST /api/roundrobin
```

---

## Input Format

### FCFS & SJF

```
P1,5
P2,3
P3,7
```

### Priority

```
P1,5,2
P2,3,1
P3,7,3
```

### Round Robin

```
P1,5
P2,3
P3,7
```

Time Quantum Example

```
2
```

---

## Output

- Gantt Chart
- Process Table
- Waiting Time
- Turnaround Time
- Average Waiting Time
- Average Turnaround Time

---

## Deployment

### Frontend

Netlify

### Backend

Render

---

## Future Improvements

- Dark Mode
- Responsive Dashboard
- Animated Gantt Chart
- Export Results as PDF
- Export Results as Excel
- Login System
- Database Integration
- CPU Utilization
- Throughput Calculation
- Response Time Calculation

---

## Author

**Ahtisham Daud Satti**

Software Engineering Student

---

## License

This project is developed for educational purposes.

import "./App.css";

import Home from "./pages/Home";

import FCFS from "./components/FCFS";
import SJF from "./components/SJF";
import Priority from "./components/Priority";
import RoundRobin from "./components/RoundRobin";

function App() {

  return (

    <div>

      <Home />

      <hr />

      <FCFS />

      <hr />

      <SJF />

      <hr />

      <Priority />

      <hr />

      <RoundRobin />

    </div>

  );

}

export default App;
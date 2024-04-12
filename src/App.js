import "./App.css";
import { Route, Routes } from "react-router-dom";
import Pggination from "./Pggination";
 


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Pggination />} />
      </Routes>
    </div>
  );
}

export default App;

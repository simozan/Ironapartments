import "./App.css";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { addApartment } from "./pages/addApartment";

function App() {
  return (
    <div className="App">
      <h1>APARTMENTS</h1>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/new-apartment" element={<addApartment/>} />
      </Routes>
    </div>
  );
}

export default App;

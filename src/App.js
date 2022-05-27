import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Reset from "./components/Reset/Reset";
import Dashboard from "./components/LandingPage/DashBoard";
import Example from "./components/FormPage/Example";
import "bootstrap/dist/css/bootstrap.min.css";
import TempDashboard from "./tempDashboard";
import BMI from "./components/FormPage/BMIForm";
import Output from "./components/Codepage/CodePage";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<TempDashboard />} />
          <Route exact path="/example" element={<Example />} />
          <Route exact path="/form1" element={<BMI />} />
          <Route exact path="/output" element={<Output />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Reset from "./components/Reset/Reset";
import Dashboard from "./components/LandingPage/DashBoard";
import "bootstrap/dist/css/bootstrap.min.css";
import TempDashboard from "./tempDashboard";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<TempDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

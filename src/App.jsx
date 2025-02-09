import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./Components/Welcome";
import FitnessDashboard from "./Components/FitnessDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<FitnessDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

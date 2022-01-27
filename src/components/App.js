import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CheckPage from "./CheckPage/CheckPage";
import HomePage from "./HomePage/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CheckPage />}></Route>
        <Route path="/:id" element={<HomePage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

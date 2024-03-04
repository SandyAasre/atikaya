import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
function App() {
  return (
    <Router>
      <div className="page">
        <Routes>
          <Route path="/*" element={<MainPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
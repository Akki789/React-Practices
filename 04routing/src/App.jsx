import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Company from "./components/Company";

function App() {

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <Routes>
          <Route>
            <Route path="/about" element={<About />} />

            <Route path="/company" element={<Company />} />
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default App;
import "./App.css";
import AutoFocus from "./components/AutoFocus";
import PreviousValue from "./components/PreviousValue";

function App() {

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <PreviousValue />
        <AutoFocus />
      </div>
    </div>
  )
}

export default App;
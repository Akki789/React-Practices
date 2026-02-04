import "./App.css";
import AutoFocus from "./components/AutoFocus";
import PreviousValue from "./components/PreviousValue";
import Example2 from "./example/Example2";

function App() {
  return (
    <div className="app-shell">
      <div className="assignment-card">
        <PreviousValue />
        <AutoFocus />
        {/* Example Questions */}
        <Example2 />
      </div>
    </div>
  );
}

export default App;

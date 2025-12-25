import "./App.css";
import ClickCounter from "./components/ClickCounter";
import DoubleTriple from "./components/DoubleTriple";
import FruitList from "./components/FruitList";
import ToggleText from "./components/ToggleText";

function App() {

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <h2>Question 1 — Click Counter (With Step Value)</h2>
        <ClickCounter />

        <h2>Question 2 — Double/Triple Number</h2>
        <DoubleTriple/>

        <h2>Question 3 — Simple Toggle Text</h2>
        <ToggleText/>

        <h2>Question 7 — Fruits List (Add + Remove)</h2>

        <FruitList />
      </div>

      
    </div>
  )
}

export default App;
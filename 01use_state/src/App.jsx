import "./App.css";
import ChildrenPropDrill from "./components/ChildrenPropDrill";
import ClickCounter from "./components/ClickCounter";
import DoubleTriple from "./components/DoubleTriple";
import ExpenseTracker from "./components/ExpenseTracker";
import FruitList from "./components/FruitList";
import MiniForm from "./components/MiniForm";
import TernaryOperator from "./components/TernaryOperator";
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

        <h2>Question 4 — Fruits List (Add + Remove)</h2>
        <FruitList />

        <h2>Question 5 — Mini Form (Object State)</h2>
        <MiniForm />

        <h2>Question 6— Expense Tracker (Basic Version)</h2>
        <ExpenseTracker />

        <h2>Prop Drilling And Ternary Operator</h2>
        <TernaryOperator />
        
        <h2>📝Props Drilling + children together</h2>
        <ChildrenPropDrill />
      </div>


    </div>
  )
}

export default App;
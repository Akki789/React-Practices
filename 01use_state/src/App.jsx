import "./App.css";
import ChangeButtonColor from "./components/ChangeButtonColor";
import ChildrenPropDrill from "./components/ChildrenPropDrill";
import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import DisableButton from "./components/DisableButton";
import DoubleTriple from "./components/DoubleTriple";
import ExpenseTracker from "./components/ExpenseTracker";
import FruitList from "./components/FruitList";
import LoginForm from "./components/LoginForm";
import MiniForm from "./components/MiniForm";
import Props from "./components/Props";
import PropsDrilling from "./components/PropsDrilling";
import RenderList from "./components/RenderList";
import ShowHideText from "./components/ShowHideText";
import TernaryOperator from "./components/TernaryOperator";
import ToDoList from "./components/ToDoList";
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
        
        
        {/* //Practice for mock */}
        <h2>Counter</h2>
        <Counter />

        <h2>Show/Hide Text</h2>
        <ShowHideText />

        <h2>ToDo List</h2>
        <ToDoList />

        <h2>Render list from an array</h2>
        <RenderList />

        <h2>Change button color</h2>
        <ChangeButtonColor />

        <h2>Disable Button After Click</h2>
        <DisableButton />

        <h2>Login Form</h2>
        <LoginForm />

        <h2>Props</h2>
        <Props />

        <h2>Props Drilling</h2>
        <PropsDrilling />
      </div>


    </div>
  )
}

export default App;
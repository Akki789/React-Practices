import "./App.css";
import RunTwoEffects from "./components/RunTwoEffects";
import SearchUsers from "./components/SearchUsers";
import UsersInfo from "./components/UsersInfo";

function App() {

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <h2> Q1 : Users info print using API</h2>
        <UsersInfo />

        <h2>Q2: Search Users using API</h2>
        <SearchUsers />

        <h2>Run two effects: one on every render, one only on mount</h2>
        <RunTwoEffects />
      </div>
    </div>
  )
}

export default App;
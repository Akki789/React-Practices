import "./App.css";
import Home from "./components/Home";
import ThemeProvider from "./context/ThemeProvider";

function App() {

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </div>
    </div>
  )
}

export default App;
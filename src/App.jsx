import "./App.css";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import ThemeToggle from "./components/ThemeToggle";
import ThemeContextProvider from "./contexts/ThemeContext";
import TodoContextProvider from "./contexts/TodoContext";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <TodoContextProvider>
          <AuthContextProvider>
            <Navbar />
            <Todos />
          </AuthContextProvider>
          <ThemeToggle />
        </TodoContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;

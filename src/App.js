// CSS file for our App component
import './App.css';

// export keyword is used to export a function, class, or variable from a module.

export function App() {
  return (
    <div className="App">
      <h1>MY APP</h1>
    </div>
  );
}

export function Navbar() {
  return (
    <nav>
      <h1>My Navbar</h1>
    </nav>
  )
}

// export default App;
// export default Navbar;
// export * from './App';
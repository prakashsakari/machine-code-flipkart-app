import './App.css';
import { Products } from "./pages";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Products />} />
      </Routes>
      
    </div>
  );
}

export default App;

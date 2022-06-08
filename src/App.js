import './App.css';
import { Products, Cart } from "./pages";
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      
    </div>
  );
}

export default App;

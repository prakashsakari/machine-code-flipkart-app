import './App.css';
import { Products, Cart, Vendor, Page} from "./pages";
// import { vendor_card } from './components/VendorCard';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/vendor' element={<Vendor />} />
        <Route path='/optimization' element={<Page />} /> 
      </Routes>
      
    </div>
  );
}

export default App;

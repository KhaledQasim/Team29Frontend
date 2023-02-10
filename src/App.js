
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddProduct from './products/AddProduct';
import EditProduct from './products/EditProduct';
import ViewProduct from './products/ViewProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/AddProduct" element={<AddProduct/>}/>
          <Route exact path="/EditProduct/:id" element={<EditProduct/>}/>
          <Route exact path="/ViewProduct/:id" element={<ViewProduct/>}/>
        </Routes>
        
      </Router>
      
    </div>
  );
}

export default App;

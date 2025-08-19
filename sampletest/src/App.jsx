import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';
const App = () => {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<ProductList/>}></Route>
        <Route path="/product/:id" element={<ProductDetail/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
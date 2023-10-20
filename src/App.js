import React, { useState } from "react";
import ExpenseViewer from "./Components/ExpenseViewer";
import ExpenseCategoryFilter from "./Components/ExpenseCategoryFilter";
import AppForm from "../src/Components/AppForm";
import "../src/App.css"

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [mode, setMode] = useState(true);

  const visibleProducts = selectedCategory
    ? products.filter((e) => e.category === selectedCategory)
    : products;

  const handleDelete = (id) => {
    setProducts(products.filter((e) => e.id !== id));
  };

  const handleDataSubmit = (data) => {
    console.log(data);
    setProducts([...products, { ...data, id: products.length + 1 }]);
  };
  const handleModeSwitch=()=>{
    setMode(!mode)
    console.log(mode)
  }
  return (
    <>
    <div className={`${mode?"bg-white text-dark":"bg-black text-white"}`} style={{minHeight:"100vh",Width:"100vw"}}>

    
      <div className={`container ${mode?"bg-white text-dark":"bg-black text-white"}`}>
      <div className={`form-check form-switch position-relative container ${mode?"bg-white":"bg-black"} `}>
        <div className="position-absolute top-50 end-0">
          <input
          value={mode}
          onChange={handleModeSwitch}
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
          />
          <label className="form-check-label " htmlFor="flexSwitchCheckDefault" >
            Switch to {mode?"Dark":"Light"} Mode
          </label>
        </div>
      </div>
        <AppForm mode={mode} formData={handleDataSubmit} />
        <ExpenseCategoryFilter
        mode={mode}
          onSelect={(category) => setSelectedCategory(category)}
        />
        <ExpenseViewer mode={mode} onDelete={handleDelete} products={visibleProducts} />
      </div>
      <p className="text-center fs-5">Made With ❤️ By Rajat Sonaniya</p>
      </div>
    </>
  );
};

export default App;

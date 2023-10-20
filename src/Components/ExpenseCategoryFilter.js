import React from "react";

const ExpenseCategoryFilter = ({onSelect,mode}) => {
  return (
    <div className={`mb-5 mt-5`}>
      <select onChange={(e)=>onSelect(e.target.value)} className={`form-select ${mode?"bg-white text-dark":"bg-secondary text-white"}`} aria-label="Default select example">
        <option value="">All Categories</option>
      
        <option value="Groceries">Groceries</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Utilities">Utilities</option>
        
      
      </select>
    </div>
  );
};

export default ExpenseCategoryFilter;

import React from "react";

const ExpenseViewer = ({ products,onDelete,mode }) => {
    if(products.length===0) return <div>Add an item to see here</div>
  return (
    <div className={`text-center mb-0 ${mode?"bg-white text-dark":"bg-dark text-white"}`}>
      <table className={`table table-bordered ${mode?"bg-white text-dark":"bg-dark text-white"}`}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.category}</td>
                <td>${item.price}</td>
                <td><button onClick={()=>onDelete(item.id)} className="btn btn-outline-danger">Delete</button></td>
            </tr>
          ))}
        </tbody>
        <tfoot>
            <tr>
                <td>Total</td>
                <td>${products.reduce((acc,price)=>acc+price.price,0)}</td>
            </tr>
            
            
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseViewer;

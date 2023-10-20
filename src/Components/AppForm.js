import React from "react";
import { useForm } from "react-hook-form";

export default function AppForm( {formData,mode} ) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    formData(data)
    reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={`mb-3 m-3 ${mode?"bg-white":"bg-dark"}`}>
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            {...register("title",{required:true})}
            type="text"
            className={`form-control ${mode?"bg-white text-dark":"bg-secondary text-white"}`}
            id="description"
          />
        </div>
        {errors.title&&<p className="text-danger">This is a required field</p>}
        <div className="mb-3 m-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {...register("price",{valueAsNumber:true,required:true})}
            type="number"
            className={`form-control ${mode?"bg-white text-dark":"bg-secondary text-white"}`}
            id="amount"
          />
        </div>
        {errors.price&&<p className="text-danger">Price is Required</p>}
        <div className="mb-3 m-3">
          <label htmlFor="select" className="form-label">
            Category
          </label>
          <select
            id="select"
            {...register("category",{required:true})}
            className={`form-control ${mode?"bg-white text-dark":"bg-secondary text-white"}`}
            aria-label="Default select example"
          >
            <option> </option>
            <option id="groceries">Groceries</option>
            <option id="utilities">Utilities</option>
            <option id="entertainment">Entertainment</option>
          </select>
        </div>
        {errors.category&&<p className="text-danger">Category selection is Required</p>}
        <div className="mb-3 m-3">
          <button type="submit" className={`btn btn-${mode?"dark":"light"}`}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

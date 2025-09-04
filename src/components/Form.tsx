import React, { FormEvent, useRef } from "react";

const Form = () => {
  const nameref = useRef<HTMLInputElement>(null);
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameref.current !== null) console.log(nameref.current.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameref} id="name" type="text" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input id="age" type="number" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Address
        </label>
        <input id="text" type="number" className="form-control" />
      </div>

      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;

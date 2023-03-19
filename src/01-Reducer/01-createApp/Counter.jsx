import { useState } from 'react';
const Counter = () => {
  const [count, setCount] = useState(0);
  const [valueToAdd, setValueToAdd] = useState(0);
  const handleChange = e => {
    const value = parseInt(e.target.value) || 0; //if we pass string we got Nan
    setValueToAdd(value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    setCount(count + valueToAdd);
    setValueToAdd(0);
  };

  return (
    <article className="container my-5">
      <article className="section-title ">
        <h1 className="my-5"> current count : {count}</h1>
        <article className="btn-container my-5">
          <button
            type="btn"
            className="btn"
            onClick={() => setCount(count + 1)}
          >
            increment
          </button>
          <button
            type="btn"
            className="btn"
            onClick={() => setCount(count - 1)}
          >
            decrement
          </button>
        </article>
      </article>
      <form className="form " onSubmit={handleSubmit}>
        <label htmlFor="name" className="form-label">
          Add a Lot
        </label>
        <input
          type="number"
          name="name"
          id="name"
          className="form-input"
          onChange={handleChange}
          value={valueToAdd || ''} //so we dontneed default 0
        />
        <section className="btn-container">
          <button type="submit" className="btn  btn-alert ">
            add it
          </button>
          <button
            type="submit"
            className="btn  btn-alert "
            onClick={() => setCount(0)}
          >
            reset
          </button>
        </section>
      </form>
    </article>
  );
};
export default Counter;

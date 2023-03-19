import { useReducer } from 'react';

const reducer = (state, action) => {
  return {
    ...state,
    count: state.count + 1,
  };
};
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    addToValue: 0,
  });
  const increment = () => {
    dispatch({
      type: 'increment-count',
    });
  };
  const Decrement = () => {
    dispatch({
      type: 'decrement-count',
    });
  };
  const add = () => {
    dispatch({
      type: 'add-count',
    });
  };
  const Reset = () => {
    dispatch({
      type: 'reset-count',
    });
  };
  return (
    <article className="container my-5">
      <article className="section-title ">
        <h1 className="my-5"> current count : {state.count}</h1>
        <article className="btn-container my-5">
          <button type="btn" className="btn" onClick={increment}>
            increment
          </button>
          <button type="btn" className="btn">
            decrement
          </button>
        </article>
      </article>

      <form className="form ">
        <label htmlFor="name" className="form-label">
          Add a Lot
        </label>
        <input
          type="number"
          name="name"
          id="name"
          className="form-input"
          value={state.addToValue || ''}
        />

        <section className="btn-container">
          <button type="submit" className="btn  btn-alert ">
            add it
          </button>
          <button type="submit" className="btn  btn-alert ">
            reset
          </button>
        </section>
      </form>
    </article>
  );
};
export default Counter;

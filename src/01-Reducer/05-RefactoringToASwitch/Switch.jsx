import { useReducer } from 'react';

const INCREMENT = 'increment-count';
const DECREMENT = 'decrement-count';
const RESET = 'reset-count';
const CHANGE_VALUE = 'change-value';
const SUBMIT_VALUE = 'submit-value';
const reducer = (state, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };
    case CHANGE_VALUE:
      return {
        ...state,
        addToValue: action.payload,
      };
    case SUBMIT_VALUE:
      return {
        ...state,
        count: state.count + state.addToValue,
        addToValue: 0,
      };

    default:
      return state; // you can also throw new Error(""+ action.type)
  }
};

//counter
const Counter = () => {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    addToValue: 0,
  });
  const handlerSubmit = e => {
    e.preventDefault();
    dispatch({
      type: SUBMIT_VALUE,
    });
  };
  const handlerClick = e => {
    const value = parseInt(e.target.value) || 0;
    dispatch({
      type: CHANGE_VALUE,
      payload: value,
    });
  };
  const increment = () => {
    dispatch({
      type: INCREMENT,
    });
  };
  const Decrement = () => {
    dispatch({
      type: DECREMENT,
    });
  };
  const Reset = () => {
    dispatch({
      type: RESET,
    });
  };

  console.log(state);
  return (
    <article className="container my-5">
      <article className="section-title ">
        <h1 className="my-5"> current count : {state.count}</h1>
        <article className="btn-container my-5">
          <button type="btn" className="btn" onClick={increment}>
            increment
          </button>
          <button type="btn" className="btn" onClick={Decrement}>
            decrement
          </button>
        </article>
      </article>

      <form className="form  " onSubmit={handlerSubmit}>
        <label htmlFor="name" className="form-label">
          Add a Lot
        </label>
        <input
          type="number"
          name="name"
          id="name"
          className="form-input"
          onChange={handlerClick}
          value={state.addToValue || ''}
        />

        <section className="btn-container">
          <button type="submit" className="btn  btn-alert ">
            add it
          </button>
          <button type="btn" className="btn  btn-alert " onClick={Reset}>
            reset
          </button>
        </section>
      </form>
    </article>
  );
};
export default Counter;

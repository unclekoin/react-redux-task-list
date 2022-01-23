import React, { useState } from 'react';

const Home = () => {
  const [text, setText] = useState('');

  const onChange = ({ target }) => {
    setText(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setText('');
    console.log(text);
  }

  return (
    <>
      <h1 className="text-center">Tasks List</h1>
      <form onSubmit={onSubmit} className="d-flex justify-content-between align-items-center mb-5">
        <input
          type="text"
          value={text}
          onChange={onChange}
          className="form-control me-3"
          placeholder="Enter task"
        />
        <button type="submit" className="btn btn-outline-primary col-3">
          Add Task
        </button>
      </form>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <span>An item</span>
          <i className="bi bi-x fs-4" role="button" />
        </li>
      </ul>
    </>
  );
};

export default Home;

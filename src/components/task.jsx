import React from 'react';

const Task = ({ text }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>{text}</span>
      <i className="bi bi-x fs-4" role="button" />
    </li>
  );
};

export default Task;

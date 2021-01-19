import React from 'react';

const Activity = (props) => {
  return (
    <div>
      <p>Order: {props.name}</p>
      <p>Count: {props.count}</p>
      <button>Delete</button>
    </div>
  );
};

export default Activity;

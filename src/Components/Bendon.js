import React from 'react';
import Activity from './Activity';
import { useSelector } from 'react-redux';

const Bendon = () => {
  const state = useSelector((state) => state);
  console.log("🔍  >  state", state)

  return (
    <>
      <h2>Bendon List</h2>
      <button>Add Activity</button>
      <Activity />
    </>
  );
};

export default Bendon;

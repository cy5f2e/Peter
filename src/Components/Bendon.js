import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button } from 'semantic-ui-react';
import Activity from './Activity';
import AddActivity from './AddActivity';

const Bendon = () => {
  const allActivities = useSelector((state) => state.activities);
  const [add, setAdd] = useState(false);

  return (
    <>
      <Button content="Add Activity" onClick={() => setAdd(!add)} />
      <br />
      {add && <AddActivity />}
      <br />
      {allActivities.map((activity) => (
        <Activity
          key={activity.id}
          id={activity.id}
          name={activity.name}
          count={activity.count}
        />
      ))}
    </>
  );
};

export default Bendon;

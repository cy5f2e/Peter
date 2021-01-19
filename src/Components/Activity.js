import React from 'react';
import { useDispatch } from 'react-redux';
import { List, Button, Segment } from 'semantic-ui-react';

const Activity = (props) => {
  const { name, count } = props;
  const dispatch = useDispatch();

  const handleDeleteActivity = () => {
    dispatch({
      type: 'DELETE_ACTIVITY',
      payload: {
        id: props.id,
      },
    });
  };

  return (
    <Segment>
      <List>
        <List.Item content={`Order: ${name}`} />
        <List.Item content={`Count: ${count}`} />
      </List>
      <Button content="Delete Activity" onClick={handleDeleteActivity} />
    </Segment>
  );
};

export default Activity;

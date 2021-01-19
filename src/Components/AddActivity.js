import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'semantic-ui-react';

const AddActivity = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  const handleChange = (ev, { name, value }) => {
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddActivity = () => {
    dispatch({
      type: 'CREATE_ACTIVITY',
      payload: {
        name: data.name,
        count: data.count,
      },
    });
  };

  return (
    <Form sie="small">
      <Form.Input
        label="Order Name"
        name="name"
        onChange={handleChange}
      />
      <Form.Input
        label="Order Count"
        name="count"
        onChange={handleChange}
      />
      <Form.Button content="ok" onClick={handleAddActivity} />
    </Form>
  );
};

export default AddActivity;

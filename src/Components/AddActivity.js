import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Segment } from 'semantic-ui-react';
import { UpdateProduct } from '../actions/ProductActions';

const AddActivity = (props) => {
  const { onClose } = props;
  const dispatch = useDispatch();
  const [data, setData] = useState({});

  const handleChange = (ev, { name, value }) => {
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddActivity = () => {
    dispatch(UpdateProduct(data.name, data.price));
    setData({});

    setTimeout(() => {
      onClose();
    }, 800);
  };

  return (
    <Segment>
      <Form size="small">
        <Form.Input
          label="品名"
          name="name"
          onChange={handleChange}
        />
        <Form.Input
          label="價格"
          name="price"
          onChange={handleChange}
        />
        <Form.Button content="送出" onClick={handleAddActivity} />
      </Form>
    </Segment>
  );
};

export default AddActivity;

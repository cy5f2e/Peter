import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Table } from 'semantic-ui-react';
import AddActivity from './AddActivity';
import { GetProduct, DeleteProduct } from '../actions/ProductActions';

const Product = () => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product);
  const [add, setAdd] = useState(false);

  useEffect(() => {
    dispatch(GetProduct());
  }, []);

  const handleDeleteItem = (id) => {
    console.log('handleDeleteItem', id);
    dispatch(DeleteProduct(id));
  };

  const handleClose = () => {
    setAdd(false);
  };

  return (
    <>
      <Button content="增加品項" onClick={() => setAdd(!add)} />
      <br />
      {add && <AddActivity onClose={handleClose} />}
      {productState.loading && <div> Loading.... </div>}
      {productState.data && (
        <>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell width={2} content="ID" />
                <Table.HeaderCell content="品名" />
                <Table.HeaderCell content="售價" />
                <Table.HeaderCell width={2} content="操作" />
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {productState.data.map((d) => (
                <Table.Row key={`${d.id}-${d.name}`}>
                  <Table.Cell content={d.id} />
                  <Table.Cell content={d.name} />
                  <Table.Cell textAlign="right" content={d.price} />
                  <Table.Cell textAlign="center">
                    <Button content="刪除品項" onClick={() => handleDeleteItem(d.id)} />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </>
      )}
    </>
  );
};

export default Product;

import axios from 'axios';

export const GetProduct = () => async (dispatch) => {
  try {
    dispatch({
      type: 'PROD_LOADING',
    });

    const out = await axios.get('http://localhost:3002/api/v1/prod/list');

    dispatch({
      type: 'PROD_SUCCESS',
      payload: out.data.ret,
    });
  } catch (e) {
    dispatch({
      type: 'PROD_FAIL',
    });
  }
};

export const UpdateProduct = (name, price) => async (dispatch) => {
  try {
    await axios.post('http://localhost:3002/api/v1/prod', { name, price });

    dispatch({
      type: 'PROD_ADD',
      payload: {
        name,
        price,
      },
    });
  } catch (e) {
    console.log('add error');
  }
};

export const DeleteProduct = (id) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:3002/api/v1/prod/${id}`);

    dispatch({
      type: 'PROD_DELETE',
      payload: { id },
    });
  } catch (e) {
    console.log('delete error');
  }
};

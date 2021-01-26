import { v4 as uuidv4 } from 'uuid';

const initState = {
  loading: true,
};

const ProductReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch(type) {
    case "PROD_FAIL":
      return {
        loading: false,
      };

    case "PROD_LOADING":
      return {
        loading: true,
      };

    case "PROD_SUCCESS":
      return {
        lading: false,
        data: payload,
      };

    case "PROD_ADD":
      return {
        loading: false,
        data: [...state.data, {
          id: uuidv4(),
          name: payload.name,
          price: payload.price,
        }],
      };

    case "PROD_DELETE":
      const entryState = [...state.data];
      const index = entryState.findIndex((s) => s.id === payload.id);
      entryState.splice(index, 1);

      return {
        loading: false,
        data: [...entryState],
      }

    default:
      return state;
  };
};

export default ProductReducer;

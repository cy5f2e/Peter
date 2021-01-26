import { v4 as uuidv4 } from 'uuid';

const initState = [
  {
    id: 1,
    name: 'apple',
    count: '5',
  },
];

const ActivitiesReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch(type) {
    case 'CREATE_ACTIVITY':
      return [...state, {
        id: uuidv4(),
        name: payload.name,
        count: payload.count,
      }];

    case 'DELETE_ACTIVITY':
      const entryState = [...state];
      const index = entryState.findIndex((s) => s.id === payload.id);
      entryState.splice(index, 1);

      return [...entryState];

    default:
      return state;
  }
};

export default ActivitiesReducer;

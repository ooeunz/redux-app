import produce from 'immer';

export default function createReducer(initialState, handlerMap) {
  return (state = initialState, action) => {
    return produce(state, draft => {
      const handler = handlerMap[action.type];
      if (handler) {
        handlerMap(draft, action);
      }
    });
  };
}
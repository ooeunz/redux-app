import createReducer from '../common/createReducer';
import createItemLogic from '../common/createItemLogic';
import mergeReducers from '../common/mergeReducers';

const { add, remove, edit, reducer: timelinesReducer } = createItemLogic('timelines');

const INCREATE_NEXT_PAGE = 'timeline/INCREATE_NEXT_PAGE';

export const addTimeline = add;
export const removeTimeline = remove;
export const editTimeline = edit;
export const increaseNextPage = () => ({ type: INCREATE_NEXT_PAGE });

const INITIAL_STATE = { nextPage: 0 };
const reducer = createReducer(INITIAL_STATE, {
  [INCREATE_NEXT_PAGE]: (state, action) => (state.nextPage += 1),
});
const reducers = [reducer, timelinesReducer];

export default mergeReducers(reducers);
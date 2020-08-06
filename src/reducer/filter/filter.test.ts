import {reducer, ActionType} from './filter';


const mockState = {
  currentFilter: `NewFilterName`,
};

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {type: `brr`})).toEqual({
    currentFilter: `All genres`,
  });
});

it(`Change filter return new filter name`, () => {
  expect(reducer(mockState, {type: ActionType.CHANGE_FILTER, payload: `NewFilterName`})).toEqual({
    currentFilter: `NewFilterName`,
  });
});

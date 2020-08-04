import FiltersByGenre from './filters-by-genre';
import {films} from '@utils/test-data';


it(`Should Filter be pressed`, () => {
  const onFilterClick = jest.fn();

  const mockEvent = {
    preventDefault: () => {},
    target: {
      textContent: `All`,
    },
  };

  const filters = shallow(
      <FiltersByGenre
        films = {films}
        onFilterClick = {onFilterClick}
        currentFilter = 'All'
        setShowedFilmsCount = {() => {}}
      />);

  const filterElement = filters.find(`.catalog__genres-item`).at(0);

  filterElement.simulate(`click`);
  expect(onFilterClick.mock.calls.length).toBe(1);
});

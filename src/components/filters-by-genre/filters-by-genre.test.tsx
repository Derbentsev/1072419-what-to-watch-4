import FiltersByGenre from './filters-by-genre';
import {films} from '@utils/test-data';


it(`Render Filters By Genre`, () => {
  const tree = renderer
    .create(<FiltersByGenre
      films = {films}
      onFilterClick = {() => null}
      currentFilter = 'All'
      setShowedFilmsCount = {() => null}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

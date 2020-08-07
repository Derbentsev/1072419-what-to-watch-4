import Tabs from './tabs';
import {films} from '@utils/test-data';


const mockfilm = films[0];


it(`Render Tabs`, () => {
  const tree = renderer
    .create(<Tabs
      film = {mockfilm}
      handleOnTab = {() => null}
      activeTab = 'genre1'
      currentFilter = 'All'
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

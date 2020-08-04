import TabOverview from './tab-overview';
import {films} from '@utils/test-data'


const mocks = films[0];

it(`Render Tab Overview`, () => {
  const tree = renderer
    .create(<TabOverview
      film = {mocks}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

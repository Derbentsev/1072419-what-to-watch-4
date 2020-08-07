import TabDetails from './tab-details';
import {films} from '@utils/test-data';


const mocks = films[0];

it(`Render Tab Details`, () => {
  const tree = renderer
    .create(<TabDetails
      film = {mocks}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

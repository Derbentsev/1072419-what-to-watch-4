import TabReview from './tab-reviews';
import {reviews} from '@utils/test-data';


it(`Render Tab Review`, () => {
  const tree = renderer
    .create(<TabReview
      reviews = {reviews}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

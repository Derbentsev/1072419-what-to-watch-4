import Review from './review';
import {reviews} from '@utils/test-data';


it(`Render review`, () => {
  const tree = renderer
    .create(<Review
      review = {reviews[0]}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

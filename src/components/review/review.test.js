import Review from './review';


const mocks = {
  comment: `comment1`,
  rating: `8.9`,
  author: `Kate Muir`,
  date: `December 24, 2016`,
}

it(`Render review`, () => {
  const tree = renderer
    .create(<Review
      review = {mocks}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

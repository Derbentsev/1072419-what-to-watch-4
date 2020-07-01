import TabReview from './tab-reviews';


const mocks = [
  {
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    rating: `8.9`,
    author: `Kate Muir`,
    date: `December 24, 2016`,
  },
  {
    comment: `Anderson's films are too precious for some, but for those of us willing to lose ourselves in them, they're a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
    rating: `8.0`,
    author: `Bill Goodykoontz`,
    date: `November 18, 2015`,
  },
  {
    comment: `I didn't find it amusing, and while I can appreciate the creativity, it's an hour and 40 minutes I wish I could take back.`,
    rating: `8.0`,
    author: `Amanda Greever`,
    date: `November 18, 2015`,
  },
  {
    comment: `The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.`,
    rating: `7.2`,
    author: `Matthew Lickona`,
    date: `December 20, 2016`,
  },
];

it(`Render Tab Review`, () => {
  const tree = renderer
    .create(<TabReview
      reviews = {mocks}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});

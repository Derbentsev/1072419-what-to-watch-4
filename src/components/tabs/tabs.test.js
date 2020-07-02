import Tabs from './tabs';


const mocks = {
  title: `title1`,
  poster: `fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  genre: `genre1`,
  dateRelease: `2011`,
  cover: `the-grand-budapest-hotel-poster.jpg`,
  src: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  director: `director1`,
  actors: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`],
  ratingScore: `1`,
  ratingLevel: `very good`,
  ratingCount: `240`,
  description: `description1`,
  runTime: `1h 29m`,
  reviews: [
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
  ],
};

it(`Render Tabs`, () => {
  const tree = renderer
    .create(<Tabs
      film = {mocks}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

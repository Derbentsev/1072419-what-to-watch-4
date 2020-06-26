import App from './app.jsx';


const mocks = [
  {
    title: `title1`,
    poster: `image1`,
    genre: `genre1`,
    dateRelease: `2015`,
    cover: `the-grand-budapest-hotel-poster.jpg`,
    src: `src1`,
  },
  {
    title: `title2`,
    poster: `image2`,
    genre: `genre2`,
    dateRelease: `2016`,
    cover: `the-grand-budapest-hotel-poster.jpg`,
    src: `src2`,
  },
  {
    title: `title3`,
    poster: `image3`,
    genre: `genre3`,
    dateRelease: `2017`,
    cover: `the-grand-budapest-hotel-poster.jpg`,
    src: `src3`,
  },
];


it(`Render App`, () => {
  const tree = renderer
    .create(<App
      title = 'On The Moon'
      genre = 'comedy'
      dateRelease = '01.01.2020'
      films = {mocks}
    />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});

import App from './app.jsx';


const mocks = [
  {
    title: `title1`,
    image: `image1`,
  },
  {
    title: `title1`,
    image: `image1`,
  },
  {
    title: `title1`,
    image: `image1`,
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

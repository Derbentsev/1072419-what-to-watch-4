import {Main} from './main';

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


it(`Should Main screen render correctly`, () => {
  const tree = renderer
    .create(<Main
      title = 'On The Moon'
      genre = 'comedy'
      dateRelease = '01.01.2020'
      films = {mocks}
      onTitleClick = {() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

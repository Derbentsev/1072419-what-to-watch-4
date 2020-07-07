import Main from './main';


const films = [
  {
    title: `title1`,
    poster: `image1`,
    src: `src1`,
  },
  {
    title: `title2`,
    poster: `image2`,
    src: `src2`,
  },
  {
    title: `title3`,
    poster: `image3`,
    src: `src3`,
  },
];

const filteredFilms = [
  {
    title: `title1`,
    poster: `image1`,
    src: `src1`,
  },
  {
    title: `title2`,
    poster: `image2`,
    src: `src2`,
  },
];


it(`Should Main screen render correctly`, () => {
  const tree = renderer
    .create(<Main
      title = 'On The Moon'
      genre = 'comedy'
      dateRelease = '01.01.2020'
      films = {films}
      onMovieCardClick = {() => {}}
      onFilterClick = {() => {}}
      currentFilter = 'All'
      filteredFilms = {filteredFilms}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

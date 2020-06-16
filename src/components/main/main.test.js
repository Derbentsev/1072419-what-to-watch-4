import {Main} from './main';


it(`Should Main screen render correctly`, () => {
  const tree = renderer
    .create(<Main
      title = 'On The Moon'
      genre = 'comedy'
      dateRelease = '01.01.2020'
      titles = {[`1`, `2`, `3`]}
      onTitleClick = {() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

import {App} from './app.jsx';


it(`Render App`, () => {
  const tree = renderer
    .create(<App
      title = 'On The Moon'
      genre = 'comedy'
      dateRelease = '01.01.2020'
      titles = {[`1`, `2`, `3`]}
    />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});

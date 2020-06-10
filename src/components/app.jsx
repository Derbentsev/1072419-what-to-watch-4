import {Main} from '@components/main/main';


export const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {title, genre, dateRelease} = props;

  return <Main
    title = {title}
    genre = {genre}
    dateRelease = {dateRelease}
  />;
};

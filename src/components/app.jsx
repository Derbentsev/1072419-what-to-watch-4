import {Main} from '@components/main/main';


export const App = (props) => {
  const {title, genre, dateRelease, titles} = props;

  return <Main
    title = {title}
    genre = {genre}
    dateRelease = {dateRelease}

    titles = {titles}
  />;
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  dateRelease: PropTypes.string.isRequired,
  titles: PropTypes.arrayOf(PropTypes.string),
};

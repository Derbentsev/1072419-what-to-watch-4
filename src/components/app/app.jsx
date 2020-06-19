import {Main} from '@components/main/main';


const onTitleClick = () => {};

export const App = (props) => {
  const {title, genre, dateRelease, films} = props;

  return <Main
    title = {title}
    genre = {genre}
    dateRelease = {dateRelease}
    films = {films}
    onTitleClick = {onTitleClick}
  />;
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  dateRelease: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
};

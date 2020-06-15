import {Main} from '@components/main/main';


const onTitleClick = () => {};

export const App = (props) => {
  const {title, genre, dateRelease, titles} = props;

  return <Main
    title = {title}
    genre = {genre}
    dateRelease = {dateRelease}
    titles = {titles}
    onTitleClick = {onTitleClick}
  />;
};

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  dateRelease: PropTypes.string.isRequired,
  titles: PropTypes.arrayOf(PropTypes.string),
};

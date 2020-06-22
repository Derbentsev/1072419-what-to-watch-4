import Main from '@components/main/main';
import {MoviePage} from '@components/movie-page/movie-page';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


const onTitleClick = () => {};

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this._renderWelcomeScreen = this._renderWelcomeScreen.bind(this);
  }

  _renderWelcomeScreen() {
    const {title, genre, dateRelease, films} = this.props;

    return (
      <Main
        title = {title}
        genre = {genre}
        dateRelease = {dateRelease}
        films = {films}
        onTitleClick = {onTitleClick}
      />
    );
  }

  _renderMovieCard() {
    const {title, genre, dateRelease, poster} = this.props;

    return (
      <MoviePage
        title = {title}
        genre = {genre}
        dateRelease = {dateRelease}
        poster = {poster}
      />
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            {this._renderWelcomeScreen()}
          </Route>
          <Route exact path='/dev-film'>
            {this._renderMovieCard()}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  dateRelease: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  })).isRequired,
};

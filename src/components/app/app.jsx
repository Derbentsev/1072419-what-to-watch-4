import Main from '@components/main/main';
import {MoviePage} from '@components/movie-page/movie-page';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


const onTitleClick = () => {};

export default class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilm: null,
    };

    this._renderWelcomeScreen = this._renderWelcomeScreen.bind(this);
  }

  _renderWelcomeScreen() {
    const {title, genre, dateRelease, films} = this.props;
    const {activeFilm} = this.state;

    if (activeFilm) {
      return (
        <MoviePage
          film = {activeFilm}
        />
      );
    }

    return (
      <Main
        title = {title}
        genre = {genre}
        dateRelease = {dateRelease}
        films = {films}
        onTitleClick = {onTitleClick}
        onMovieCardClick = {(film) => {
          this.setState({
            activeFilm: film
          });
        }}
      />
    );
  }

  _renderMoviePage() {
    const {activeFilm} = this.state;

    return (
      <MoviePage
        film = {activeFilm}
      />
    );
  }

  render() {
    const {films} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            {this._renderWelcomeScreen()}
          </Route>
          <Route exact path='/dev-film'>
            <MoviePage
              film = {films[0]}
            />
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
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  })).isRequired,
};

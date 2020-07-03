import Main from '@components/main/main';
import MoviePage from '@components/movie-page/movie-page';
import {connect} from 'react-redux';
import {ActionCreator} from '@src/reducer';


const onTitleClick = () => {};

class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilm: null,
    };

    this._renderWelcomeScreen = this._renderWelcomeScreen.bind(this);
    this._onMovieCardClick = this._onMovieCardClick.bind(this);
  }

  _onMovieCardClick(film) {
    this.setState({
      activeFilm: film,
    });
  }

  _renderWelcomeScreen() {
    const {
      title,
      genre,
      dateRelease,
      films,
      onFilterClick,
      currentFilter,
      filteredFilms,
    } = this.props;

    const {activeFilm} = this.state;

    if (activeFilm) {
      return (
        <MoviePage
          film = {activeFilm}
          films = {films}
          onMovieCardClick = {this._onMovieCardClick}
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
        onFilterClick = {onFilterClick}
        onMovieCardClick = {this._onMovieCardClick}
        currentFilter = {currentFilter}
        filteredFilms = {filteredFilms}
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
              films = {films}
              onMovieCardClick = {this._onMovieCardClick}
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
  onFilterClick: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired,
  filteredFilms: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    dateRelease: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    ratingScore: PropTypes.string.isRequired,
    ratingLevel: PropTypes.string.isRequired,
    ratingCount: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    runTime: PropTypes.string.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      comment: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })),
  })),
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    dateRelease: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    ratingScore: PropTypes.string.isRequired,
    ratingLevel: PropTypes.string.isRequired,
    ratingCount: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    runTime: PropTypes.string.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      comment: PropTypes.string.isRequired,
      rating: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })),
  })).isRequired,
};

const mapStateToProps = (state) => ({
  currentFilter: state.currentFilter,
  filteredFilms: state.filteredFilms,
});

const mapDispatchToProps = (dispatch) => ({
  onFilterClick(filteredFilms, filterName) {
    dispatch(ActionCreator.setFilteredFilms(filteredFilms));
    dispatch(ActionCreator.changeFilter(filterName));
  },
});


export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);

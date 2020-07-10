import Main from '@components/main/main.connect';
import MoviePage from '@components/movie-page/movie-page.connect';
import FullVideoPlayer from '@components/full-video-player/full-video-player';


export default class App extends React.PureComponent {
  constructor(props) {
    super(props);

    this._renderWelcomeScreen = this._renderWelcomeScreen.bind(this);
  }

  _renderWelcomeScreen() {
    const {
      title,
      genre,
      dateRelease,
      activeFilm,
      fullVideoPlayer,
    } = this.props;

    if (activeFilm) {
      return (
        <MoviePage/>
      );
    } else if (fullVideoPlayer) {
      return (
        <FullVideoPlayer/>
      );
    }

    return (
      <Main
        title = {title}
        genre = {genre}
        dateRelease = {dateRelease}
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
            <MoviePage/>
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
  activeFilm: PropTypes.shape({
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
  }),
};

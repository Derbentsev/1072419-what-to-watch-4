import Main from '@components/main/main.connect';
import MoviePage from '@components/movie-page/movie-page.connect';
import SignIn from '@components/sign-in/sign-in.connect';
import {AuthorizationStatus} from '@reducer/user/user';
import FullVideoPlayer from '@components/full-video-player/full-video-player.connect';
import AddReview from '@components/add-review/add-review.connect';
import {PageName} from '@reducer/page/page';
import Loader from 'react-loader-spinner';
import history from '@src/history';
import {AppRoute} from '@consts/';
import MyList from '@components/my-list/my-list.connect';


export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this._renderWelcomeScreen = this._renderWelcomeScreen.bind(this);
    this._renderLoginScreen = this._renderLoginScreen.bind(this);
  }

  _renderWelcomeScreen() {
    const {
      activeFilm,
      activeFullVideoPlayer,
      authorizationStatus,
      activePage,
    } = this.props;

    if (authorizationStatus === AuthorizationStatus.PENDING) {
      return (
        <div style={{textAlign: `center`}}>
          <Loader/>
        </div>
      );
    } else if (activePage === PageName.ADD_REVIEW) {
      return <AddReview/>;
    } else if (activeFullVideoPlayer) {
      return <FullVideoPlayer/>;
    } else if (activeFilm) {
      return <MoviePage/>;
    }

    return <Main/>;
  }

  _renderLoginScreen() {
    const {
      authorizationStatus,
      login,
    } = this.props;

    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      return <SignIn login = {login}/>;
    }

    return <Main/>;
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={AppRoute.ROOT}>
            {this._renderWelcomeScreen()}
          </Route>
          <Route exact path={AppRoute.LOGIN}>
            {this._renderLoginScreen()}
          </Route>
          <Route exact path={AppRoute.MY_LIST}>
            <MyList/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  activePage: PropTypes.string.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  activeFullVideoPlayer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    dateRelease: PropTypes.number.isRequired,
    cover: PropTypes.string.isRequired,
    videoSrc: PropTypes.string.isRequired,
    previewVideoSrc: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    ratingScore: PropTypes.number.isRequired,
    ratingCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    runTime: PropTypes.number.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      comment: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })),
  }),
  activeFilm: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    dateRelease: PropTypes.number.isRequired,
    cover: PropTypes.string.isRequired,
    videoSrc: PropTypes.string.isRequired,
    previewVideoSrc: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    ratingScore: PropTypes.number.isRequired,
    ratingCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    runTime: PropTypes.number.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      comment: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })),
  }),
};

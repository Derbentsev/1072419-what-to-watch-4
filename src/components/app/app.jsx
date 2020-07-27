import Main from '@components/main/main.connect';
import MoviePage from '@components/movie-page/movie-page.connect';
import SignIn from '@components/sign-in/sign-in.connect';
import {AuthorizationStatus} from '@reducer/user/user';
import FullVideoPlayer from '@components/full-video-player/full-video-player.connect';
import AddReview from '@components/add-review/add-review.connect';
import {PageName} from '@reducer/page/page';
import Loader from 'react-loader-spinner';
import history from '@history/history';
import {AppRoute} from '@consts/';
import MyList from '@components/my-list/my-list.connect';


export default class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this._renderWelcomeScreen = this._renderWelcomeScreen.bind(this);
  }

  _renderWelcomeScreen() {
    const {
      activeFullVideoPlayer,
      activePage,
    } = this.props;

    if (activePage === PageName.ADD_REVIEW) {
      return <AddReview/>;
    } else if (activeFullVideoPlayer) {
      return <FullVideoPlayer/>;
    }

    return <Main/>;
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path={AppRoute.ROOT} component={Main} />
          <Route exact path={AppRoute.LOGIN} component={SignIn} />
          <Route exact path={AppRoute.MY_LIST} component={MyList} />
          <Route exact path={AppRoute.FILM} component={MoviePage} />
          <Route exact path={AppRoute.REVIEW} component={AddReview} />
          <Route exact path={AppRoute.PLAYER} component={FullVideoPlayer} />
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
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
};

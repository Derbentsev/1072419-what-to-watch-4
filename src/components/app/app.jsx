import Main from '@components/main/main.connect';
import MoviePage from '@components/movie-page/movie-page.connect';
import SignIn from '@components/sign-in/sign-in.connect';
import FullVideoPlayer from '@components/full-video-player/full-video-player.connect';
import AddReview from '@components/add-review/add-review.connect';
import history from '@history/history';
import {AppRoute} from '@consts/';
import MyList from '@components/my-list/my-list.connect';


export default class App extends React.PureComponent {
  componentDidMount() {
    const {checkAuth, loadFilms, loadFilmPromo} = this.props;

    checkAuth();
    loadFilms();
    loadFilmPromo();
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
  checkAuth: PropTypes.func.isRequired,
  loadFilms: PropTypes.func.isRequired,
  loadFilmPromo: PropTypes.func.isRequired,
};

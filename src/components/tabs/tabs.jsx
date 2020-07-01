import TabOverview from '@components/tab-overview/tab-overview';
import TabDetails from '@components/tab-details/tab-details';
import TabReviews from '@components/tab-reviews/tab-reviews';
import {TabNames} from '@consts/';


export default class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {activeTab: TabNames.OVERVIEW};

    this._handleOnTab = this._handleOnTab.bind(this);
  }

  _handleOnTab(evt) {
    evt.preventDefault();

    this.setState({
      activeTab: evt.target.textContent
    });
  }

  render() {
    const {film} = this.props;

    return (
      <>
        <div className="movie-card__desc">
          <nav className="movie-nav movie-card__nav">
            <ul className="movie-nav__list">
              <li className={`movie-nav__item ${this.state.activeTab === TabNames.OVERVIEW ? `movie-nav__item--active` : ``}`}>
                <a href="#" onClick={this._handleOnTab} className="movie-nav__link">Overview</a>
              </li>
              <li className={`movie-nav__item ${this.state.activeTab === TabNames.DETAILS ? `movie-nav__item--active` : ``}`}>
                <a href="#" onClick={this._handleOnTab} className="movie-nav__link">Details</a>
              </li>
              <li className={`movie-nav__item ${this.state.activeTab === TabNames.REVIEWS ? `movie-nav__item--active` : ``}`}>
                <a href="#" onClick={this._handleOnTab} className="movie-nav__link">Reviews</a>
              </li>
            </ul>
          </nav>

          {this.state.activeTab === TabNames.OVERVIEW && <TabOverview film = {film}/>}
          {this.state.activeTab === TabNames.DETAILS && <TabDetails film = {film}/>}
          {this.state.activeTab === TabNames.REVIEWS && <TabReviews reviews = {film.reviews}/>}

        </div>
      </>
    );
  }
}

Tabs.propTypes = {
  film: PropTypes.shape({
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
  }).isRequired,
};

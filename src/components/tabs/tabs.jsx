import TabOverview from '@components/tab-overview/tab-overview';
import TabDetails from '@components/tab-details/tab-details';
import TabReviews from '@components/tab-reviews/tab-reviews'


export default class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {activeTab: `Reviews`};

    this._handleOnTab = this._handleOnTab.bind(this);
  }

  _handleOnTab(evt) {
    evt.preventDefault();

    this.setState = {
      activeTab: evt.target.textContent
    };
  }

  render() {
    const {film} = this.props;

    return (
      <>
        <div className="movie-card__desc">
          <nav className="movie-nav movie-card__nav">
            <ul className="movie-nav__list">
              <li className={`movie-nav__item ${this.state.activeTab === `Overview` ? `movie-nav__item--active` : ``}`}>
                <a href="#" onClick={this._handleOnTab} className="movie-nav__link">Overview</a>
              </li>
              <li className={`movie-nav__item ${this.state.activeTab === `Details` ? `movie-nav__item--active` : ``}`}>
                <a href="#" onClick={this._handleOnTab} className="movie-nav__link">Details</a>
              </li>
              <li className={`movie-nav__item ${this.state.activeTab === `Reviews` ? `movie-nav__item--active` : ``}`}>
                <a href="#" onClick={this._handleOnTab} className="movie-nav__link">Reviews</a>
              </li>
            </ul>
          </nav>

          {this.state.activeTab === `Overview` && <TabOverview/>}
          {this.state.activeTab === `Details` && <TabDetails/>}
          {this.state.activeTab === `Reviews` && <TabReviews/>}

        </div>
      </>
    );
  }
}

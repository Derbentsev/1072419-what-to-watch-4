import TabOverview from '@components/tab-overview/tab-overview';
import TabDetails from '@components/tab-details/tab-details';
import TabReviews from '@components/tab-reviews/tab-reviews.connect';
import {TabNames} from '@consts/';


const Tabs = (props) => {
  const {film, handleOnTab, activeTab} = props;

  return (
    <>
      <div className="movie-card__desc">
        <nav className="movie-nav movie-card__nav">
          <ul className="movie-nav__list">
            <li className={`movie-nav__item ${activeTab === TabNames.OVERVIEW ? `movie-nav__item--active` : ``}`}>
              <a href="#" onClick={handleOnTab} className="movie-nav__link">Overview</a>
            </li>
            <li className={`movie-nav__item ${activeTab === TabNames.DETAILS ? `movie-nav__item--active` : ``}`}>
              <a href="#" onClick={handleOnTab} className="movie-nav__link">Details</a>
            </li>
            <li className={`movie-nav__item ${activeTab === TabNames.REVIEWS ? `movie-nav__item--active` : ``}`}>
              <a href="#" onClick={handleOnTab} className="movie-nav__link">Reviews</a>
            </li>
          </ul>
        </nav>

        {activeTab === TabNames.OVERVIEW && <TabOverview film = {film}/>}
        {activeTab === TabNames.DETAILS && <TabDetails film = {film}/>}
        {activeTab === TabNames.REVIEWS && <TabReviews/>}
      </div>
    </>
  );
};

Tabs.propTypes = {
  film: PropTypes.shape({
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
  }).isRequired,
  handleOnTab: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
};


export default Tabs;

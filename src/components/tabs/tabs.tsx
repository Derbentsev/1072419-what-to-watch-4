import TabOverview from '@components/tab-overview/tab-overview';
import TabDetails from '@components/tab-details/tab-details';
import TabReviews from '@components/tab-reviews/tab-reviews.connect';
import {Film} from '@src/types/film.types';


const TabNames = {
  OVERVIEW: `Overview`,
  DETAILS: `Details`,
  REVIEWS: `Reviews`,
};

interface Props {
  handleOnTab: () => void,
  activeTab: string,
  currentFilter: string,
  film: Film,
}

const Tabs: React.FunctionComponent<Props> = (props: Props) => {
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


export default Tabs;
export {TabNames};

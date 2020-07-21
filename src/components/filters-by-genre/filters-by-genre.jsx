import {FilterName} from '@consts/';
import {getUniqueGenres} from '@reducer/films/selectors';


const FiltersByGenre = (props) => {
  const {
    films,
    onFilterClick,
    currentFilter,
    setShowedFilmsCount,
  } = props;

  const uniqueGenres = getUniqueGenres(films);
  uniqueGenres.unshift(FilterName.ALL);

  return (
    <>
      {uniqueGenres.map((genre, index) => {
        return (
          <li
            className={`catalog__genres-item ${genre === currentFilter && `catalog__genres-item--active`}`}
            key={index}
            onClick={(evt) => {
              evt.preventDefault();
              onFilterClick(evt.target.textContent);
              setShowedFilmsCount();
            }}
          >
            <a href="#" className="catalog__genres-link">
              {genre}
            </a>
          </li>
        );
      })}
    </>
  );
};

FiltersByGenre.propTypes = {
  setShowedFilmsCount: PropTypes.func.isRequired,
  onFilterClick: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired,
};


export default FiltersByGenre;

import {FILTER_ALL_GENRES_NAME} from '@consts/';
import {getUniqueGenres} from '@utils/';


const FiltersByGenre = (props) => {
  const {
    films,
    onFilterClick,
    currentFilter,
  } = props;

  const uniqueGenres = getUniqueGenres(films);
  uniqueGenres.unshift(FILTER_ALL_GENRES_NAME);

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
  onFilterClick: PropTypes.func.isRequired,
  currentFilter: PropTypes.string.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  })).isRequired,
};


export default FiltersByGenre;

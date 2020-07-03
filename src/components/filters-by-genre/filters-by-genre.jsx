import {getUniqueGenres} from '@utils/';

const FiltersByGenre = (props) => {
  const {films, onFilterClick} = props;

  const uniqueGenres = getUniqueGenres(films);

  return (
    <>
      <li
        onClick={() => {
          onFilterClick();
        }}
        className="catalog__genres-item catalog__genres-item--active"
      >
        <a href="#" className="catalog__genres-link">All genres</a>
      </li>

      {uniqueGenres.map((item, index) => {
        return (
          <li
            onClick={onFilterClick}
            className="catalog__genres-item"
            key={index}>
            <a href="#" className="catalog__genres-link">{item}</a>
          </li>
        );
      })}
    </>
  );
};

FiltersByGenre.propTypes = {
  onFilterClick: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  })).isRequired,
};


export default FiltersByGenre;

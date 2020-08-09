import {FilterName} from '@src/consts/consts';
import {getUniqueGenres} from '@reducer/films/selectors';
import {Film} from '@src/types/film.types';


interface Props {
  setShowedFilmsCount: () => void;
  onFilterClick: (string) => void;
  currentFilter: string;
  films: Film[];
}

const FiltersByGenre: React.FunctionComponent<Props> = (props: Props) => {
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
              const input = evt.target as HTMLElement;
              onFilterClick(input.textContent);
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


export default FiltersByGenre;

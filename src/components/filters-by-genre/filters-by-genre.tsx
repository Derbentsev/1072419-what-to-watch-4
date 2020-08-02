import {FilterName} from '@consts/';
import {getUniqueGenres} from '@reducer/films/selectors';


interface Props {
  setShowedFilmsCount: () => {},
  onFilterClick: () => {},
  currentFilter: string,
  films: [{
    id: number,
    title: string,
    poster: string,
    genre: string,
    dateRelease: number,
    cover: string,
    videoSrc: string,
    previewVideoSrc: string,
    director: string,
    actors: [string],
    ratingScore: number,
    ratingCount: number,
    description: string,
    runTime: number,
    reviews: {
      comment: string,
      rating: number,
      author: string,
      date: string,
    },
  }],
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


export default FiltersByGenre;

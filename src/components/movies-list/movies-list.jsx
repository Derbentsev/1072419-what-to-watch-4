import {MovieCard} from '@components/movie-card/movie-card';


export default class MoviesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeFilmCard: null
    };
  }

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film, i) => (
          <MovieCard
            key = {i}
            film = {film}
            onMovieCardMouseOver = {() => {
              this.setState({
                activeFilmCard: this
              });
            }}
          />
        ))}
      </div>
    );
  }
}

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  })).isRequired
};

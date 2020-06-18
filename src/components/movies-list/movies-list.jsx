import MovieCard from '@components/movie-card/movie-card';


export default class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film, i) => (
          <MovieCard
            key = {i}
            film = {film}
          />
        ))}
      </div>
    );
  }
}

MoviesList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
};

import MovieCard from '@components/movie-card/movie-card';
import PureComponent from 'react';


export default class MovieList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {films} = this.props;

    return (
      <div className="catalog__movies-list"></div>
    );
  }
}

MovieCard.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
};

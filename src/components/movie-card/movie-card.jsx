import {PureComponent} from 'react';


export default class MovieCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {film} = this.props;

    return (
      <article className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          <img src={`img/${film.image}`} alt={film.title} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{film.title}</a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  film: PropTypes.object.isRequired,
};

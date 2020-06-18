import {PureComponent} from 'react';


export default class MovieCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {films} = this.props;

    return (
      <article className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          <img src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <a className="small-movie-card__link" href="movie-page.html">{films.title}</a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object).isRequired,
};

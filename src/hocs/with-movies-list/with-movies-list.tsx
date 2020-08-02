const withMoviesList = (Component) => {
  class WithMoviesList extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeFilmCard: null
      };

      this._handleMovieCardMouseEnter = this._handleMovieCardMouseEnter.bind(this);
    }

    _handleMovieCardMouseEnter() {
      this.setState({
        activeFilmCard: this
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          handleMovieCardMouseEnter={this._handleMovieCardMouseEnter}
        />
      );
    }
  }

  WithMoviesList.propTyprs = {
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
    handleMovieCardMouseEnter: PropTypes.func.isRequired,
  };

  return WithMoviesList;
};


export default withMoviesList;

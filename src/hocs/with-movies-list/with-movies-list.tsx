interface Props {
  handleMovieCardMouseEnter: () => {},
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
    reviews: [{
      comment: string,
      rating: number,
      author: string,
      date: string,
    }],
  }],
}

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

  return WithMoviesList;
};


export default withMoviesList;

const SHOW_FILM_CARD_BY_START = 8;


const withMain = (Component) => {
  class WithMain extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        showedFilmsCount: SHOW_FILM_CARD_BY_START,
      };

      this._setShowedFilmsCount = this._setShowedFilmsCount.bind(this);
    }

    _setShowedFilmsCount(count = 0) {
      if (count === 0) {
        this.setState({showedFilmsCount: SHOW_FILM_CARD_BY_START});
        return;
      }
      this.setState({showedFilmsCount: this.state.showedFilmsCount + count});
    }

    render() {
      const {children} = this.props;

      return (
        <Component
          {...this.props}
          setShowedFilmsCount = {this._setShowedFilmsCount}
          showedFilmsCount = {this.state.showedFilmsCount}
        >
          {children}
        </Component>
      );
    }
  }

  WithMain.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
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
  };

  return WithMain;
};


export default withMain;

const SHOW_FILM_CARD_BY_START = 8;

interface Props {
  children: [node] | node,
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

  return WithMain;
};


export default withMain;

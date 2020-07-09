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
          _handleMovieCardMouseEnter={this._handleMovieCardMouseEnter}
        />
      );
    }
  }

  return WithMoviesList;
};


export default withMoviesList;

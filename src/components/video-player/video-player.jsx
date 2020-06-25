export default class VideoPlayer extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      isPlaying: false,
    };
  }

  render() {
    const {film} = this.props;

    return (
      <>
        <video width="280" height="175" poster={`img/${film.poster}`} src={film.previewLink}>

        </video>
      </>
    );
  }
}

VideoPlayer.propTypes = {
  film: PropTypes.shape({
    poster: PropTypes.string.isRequired,
    previewLink: PropTypes.string.isRequired,
  }).isRequired,
};

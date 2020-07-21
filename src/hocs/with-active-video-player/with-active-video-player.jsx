import Player from '@components/video-player/video-player';
import withVideoPlayer from '@hocs/with-video-player/with-video-player';


const VideoPlayer = withVideoPlayer(Player);

const withActiveVideoPlayer = (Component) => {
  class WithActivePlayer extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        isPlaying: false,
      };
    }

    render() {
      return (
        <Component
          {...this.props}

          renderPlayer = {() => {
            return (
              <VideoPlayer
                {...this.props}
              />
            );
          }}
        />
      );
    }
  }

  WithActivePlayer.propTypes = {
    film: PropTypes.shape({
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
    }).isRequired,
    handleMovieCardMouseEnter: PropTypes.func.isRequired,
  };

  return WithActivePlayer;
};


export default withActiveVideoPlayer;

import Player from '@components/video-player/video-player';
import withVideoPlayer from '@hocs/with-video-player/with-video-player';


interface Props {
  handleMovieCardMouseEnter: () => {},
  film: {
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
  },
}

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

  return WithActivePlayer;
};


export default withActiveVideoPlayer;

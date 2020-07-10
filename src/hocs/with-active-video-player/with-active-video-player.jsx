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

  return WithActivePlayer;
};


export default withActiveVideoPlayer;

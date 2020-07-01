import VideoPlayer from '@components/video-player/video-player';


const withVideoPlayer = (Component) => {
  class WithVideoPlayer extends React.PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <Component
          {...this.props}

          renderPlayer = {(src, poster) => {
            return (
              <VideoPlayer
                src = {src}
                poster = {poster}
              />
            );
          }}
        />
      );
    }
  }

  WithVideoPlayer.propTypes = {};

  return WithVideoPlayer;
};


export default withVideoPlayer;

import Player from '@components/video-player/video-player';
import withVideoPlayer from '@hocs/with-video-player/with-video-player';
import {Subtract} from 'utility-types';


interface InjectingProps {
  renderPlayer: () => React.ReactNode,
}

interface State {
  isPlaying: boolean,
}

const VideoPlayer = withVideoPlayer(Player);

const withActiveVideoPlayer = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithActivePlayer extends React.PureComponent<T, State> {
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

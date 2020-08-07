interface Props {
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
  children: React.ReactNode;
}


const VideoPlayer: React.FunctionComponent<Props> = (props: Props) => {
  const {handleMouseEnter, handleMouseLeave, children} = props;

  return (
    <>
      <div
        className="small-movie-card__poster"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
    </>
  );
};


export default VideoPlayer;

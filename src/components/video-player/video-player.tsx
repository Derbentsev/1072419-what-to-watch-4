interface Props {
  handleMouseEnter: () => {},
  handleMouseLeave: () => {},
  children: {
    [node] || node,
  },
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

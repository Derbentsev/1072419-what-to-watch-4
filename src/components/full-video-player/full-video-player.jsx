const FullVideoPlayer = (props) => {
  const {children} = props;

  return (
    <>
      <div className="player">
        {children}
      </div>
    </>
  );
};

FullVideoPlayer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};


export default FullVideoPlayer;



function Tweet(props) {
  console.log(props)

  return (
    <div className="tweet">
      <img
        src={props.image}
        className="profile"
        alt="profile"
      />

      <div className="body">
        <div className="top">
          <span className="user">
            <span className="name">{props.name}</span>
            <span className="handle">{props.handle}</span>
          </span>

          <span className="timestamp">{props.timestamp}</span>
        </div>

        <p className="message">
          {props.message}
        </p>

        <div className="actions">
          {/* Font Awesome icons */}
          <i className="far fa-comment"></i>
          <i className="fas fa-retweet"></i>
          <i className="far fa-heart"></i>
          <i className="fas fa-share"></i>
        </div>
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>
  );
}

export default Tweet;

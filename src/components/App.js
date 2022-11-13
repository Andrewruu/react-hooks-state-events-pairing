import video from "../data/video.js";
import Vote from "./Vote.js";
import Video from "./Video.js";
import Comments from "./Comments.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video embedUrl={video.embedUrl} title={video.title} views={video.views} createdAt={video.createdAt}/>
      <Vote upVote={video.upvotes} downVote={video.downvotes}/>
      <Comments comments={video.comments}/>
    </div>
  );
}

export default App;

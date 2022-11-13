import react from "react";

function Video({embedUrl,title,views,createdAt}){
    return(
        <div className="video">
            <iframe
            width="919"
            height="525"
            src={embedUrl}
            frameBorder="0"
            allowFullScreen
            title="Thinking in React"
            />
            <h1>{title}</h1>
            <h3>{views} views | {createdAt}</h3>
        </div>
    )
}

export default Video;
import React, {useState} from "react";
import video from "../data/video";


class Vote extends React.Component{
    state = {
        likes: video.upvotes,
        dislikes: video.downvotes
    }
    handleLikes = () =>{
        this.setState({
            likes: this.state.likes +1
        })
    }
    handleDislikes = () =>{
        this.setState({
            dislikes: this.state.dislikes +1
        })
    }
    render(){
        return(
            <div className="votes">
                <button className="Likes" onClick={this.handleLikes}>{this.state.likes}👍</button>
                <button className="Dislikes"onClick={this.handleDislikes}>{this.state.dislikes}👎</button>
            </div>
        )
    }
}



export default Vote;
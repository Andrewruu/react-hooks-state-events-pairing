import React, {useState} from "react";


function Comments({comments}){
    const [toggleComment, setComment] = useState("Hide Comments")
    const [isVisible, setIsVisible] = useState(true)
    console.log("comments", comments)
    function handleClick(){
        if(toggleComment === "Hide Comments"){
            setComment("Show Comments")
            setIsVisible(!isVisible)
        }
        else{
            setComment("Hide Comments")
            setIsVisible(!isVisible)
        }
    }
    const allComments = comments.map((comment) => {
        return (
        <div key={comment.id}>
            <h4>
                {comment.user}
            </h4>
            <div className="userComment">{comment.comment}</div>
        </div>
        )
    })

    return(
        <div className="comments">
            <button onClick={handleClick}>{toggleComment}</button>
            <h3>2 Comments</h3>
                <div style={{visibility: isVisible ? 'visible' : 'hidden'}}>
                    {allComments}
                </div>
        </div>
    )
}

export default Comments
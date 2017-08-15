import React  from "react";

const Comments = React.createClass({

handleSubmit(e){

    e.preventDefault();
    console.log('Submiting the form')
    const { postId } = this.props.params;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value; 
    console.log(postId , author, comment )
    this.props.addComment(postId,author,comment)
    this.refs.author.value = "";
    this.refs.comment.value = "";

},

renderComment(comment, i ){
        console.log(comment)
    return( 

        <div className="comment" key={i}>
            <p>
                <strong> {comment.user} </strong>
                {comment.text}
                <button 
                onClick={
                    this.props.RemoveComment.bind(
                        null,
                        this.props.params.postId,
                        i
                )}
                 className="remove-comment">&times;</button>
            </p>
        </div>
    )

},
    render() {

            return(
            <div className="comments">


                   { this.props.postComments.map(this.renderComment)}
                    <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit} >
                        <input type="text" ref="author" placeholder="author" />
                        <input type="text" ref="comment" placeholder="comment" />
                        <input type="submit" hidden/>
                    </form>


                    
                 </div>
            )
    }

})

export default Comments;
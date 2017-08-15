import React, {Component} from "react";
import {Link} from 'react-router';
import Photo from "./photo"
import Comments from './Comments'
const Single = React.createClass({
// need index of the post 
//  get theactual post with props


    render() {
        const { postId  } = this.props.params;
       const i = this.props.posts.findIndex((post) => post.code === postId);
       const post = this.props.posts[i]
       const postComments = this.props.comments[postId] || [];
    //    console.log(post)
        return (
            <div className="single-photo">
                <Photo i={i} post={post} {...this.props} />
                <Comments postComments = {postComments} {...this.props}> </Comments>
                </div>
        )
    }

})

export default Single;
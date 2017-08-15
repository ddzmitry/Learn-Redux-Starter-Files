import React, {Component} from "react";
import {Link} from 'react-router';
import Photo from "./photo"
const PhotoGrid = React.createClass({
    
    render() {
        return (
                <div className="photo-grid">
                    {this.props.posts.map((post,i)=> <Photo post={post} i={i} key={i} {...this.props}/> )}
                </div>
        )
    }

})

export default PhotoGrid;
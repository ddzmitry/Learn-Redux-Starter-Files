import React, {Component} from 'react';
import {Link} from "react-router";
import CSSTransitionGroup from 'react-addons-css-transition-group';


class Photo extends Component {

  render() {
      const {post,i,comments ,img } = this.props;

    return(
        
            <figure className="grid-figure">
               <div className = "grid-photo-wrap">
                    <Link to={`/view/${post.code}`}>

            <img className="grid-photo" src={post.display_src} alt={post.caption}/> 
                        
                        <CSSTransitionGroup
                        transitionName="like"
                        transitionEnterTimeout = {500}
                        transitionLeaveTimeout = {500}
                        >
                        <span key={post.likes} className="likes-heart" >{post.likes} </span>
                            </CSSTransitionGroup>

                    </Link>
               </div>
               <figcaption>
               <p>{post.caption}</p>
               <button onClick={ this.props.increment.bind(null,i) } className="likes">&hearts;{post.likes} </button>
               <Link className="button" to={`/view/${post.code}`} > 
                <span className='comment-count'></span>
                <span className="speech-bubble"></span>
                { comments[post.code] ? comments[post.code].length : 0   }
               </Link>

               </figcaption>
            </figure>

    );
  }


}

export default Photo;

function postComments(state=[],action){

    switch (action.type) {
      case 'ADD_COMMENT':
      //  adding new comment
        return[...state, {
          user: action.author,
          text:action.comment
        }]
        break;
      case 'REMOVE_COMMENT':
      // return without deleted comment 
        //action will be an object from action creaor that will be an object 
        //and will have {postId,i} inside of it ! 

       return[...state.slice(0,action.i),
        // after the delited one to the end
              ...state.slice(action.i + 1)
        ]
        break;
        default:
      return state;
        break;
    }

}

function comments(state = [], action) {
  // WE NEED TO TELL REDUCER ON WHAT ACTION IT NEEDS
  // TO UPDATE THE STATE
  if(typeof action.postId !== 'undefined'){
      return {
          //take current state and overwiret needed post
        ...state,
        [action.postId] : postComments(state[action.postId], action)
      }

  }
  return state
}

export default comments;

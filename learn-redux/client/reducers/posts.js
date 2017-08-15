//a reducer takes in two things
//1 the Action (what happened)
//2 copy of current state 
// action, store -> let me see -> updated copy of the store
function posts(state = [], action) {
  // function proggramming have to return bran new state 

  // console.log("The post Will Change !")
    switch (action.type) {
      case 'INCREMENT_LIKES':
        // return updated state 
        console.log('Incrementing Likes')
        const i = action.index;
        return [
          // we update the obkect with picture we need! 
          ...state.slice(0,i), // before the one we are updating because we will have all pictures to work width
          { ...state[i], likes: state[i].likes + 1},

          ...state.slice(i+1)
        ]
      break;
      default:
      return state;
        break;
    }

  
}

export default posts;


//a reducer takes in two things
//1 the Action (what happened)
//2 copy of current state 
// action, store -> let me see -> updated copy of the store
function posts(state = [], action) {
  console.log("The post Will Change !")
  console.log(state, action);
  return state;
}

export default posts;


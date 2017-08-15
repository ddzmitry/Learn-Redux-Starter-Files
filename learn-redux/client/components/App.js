import { bindActionCreators } from 'redux';
import {connect } from 'react-redux';
import * as actionCreators from "../actions/actionCreator";
import Main from "./Main";

function mapStateToProps(state){
    return {
        posts: state.posts,
        comments: state.comments
    }
}

// disatch method
function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators,dispatch);
}
//mapStateToProps - serves the state 
// mapDispatchToProps serves all actions 

const App = connect(mapStateToProps,mapDispatchToProps)(Main);

export default App;


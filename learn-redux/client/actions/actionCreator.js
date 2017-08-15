
// ACTION CREATORS 
// THEY WILL TELL WHAT EXACTLY TO DO!!!
//increment likes
export function increment(index) {
    // changing state
    return {
        type: "INCREMENT_LIKES",
        index
    }
} 
// add comment
export function addComment(postId,author,comment){

    return {
        type: "ADD_COMMENT",
        postId,
        author,
        comment
    }
}
//remove comment
export function RemoveComment(postId,i){

    return {
        type: "REMOVE_COMMENT",
        i,
        postId
    }
}
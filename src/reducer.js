export const initialState={
    // term is the key where the our prev inputed text is going to be placed
    term:null
};
export const actionTypes ={
    // this helps to update the data layer and makes it equal to the present inputed text search
    SET_SEARCH_TERM:"SET_SEARCH_TERM"
};
// this is used to update the data layer
const reducer=(state, action)=>{
    // any action to the data layer would fire this log
    console.log(action);
    // if the action type is matched then it updates the data layer
    switch(action.type){
        case actionTypes.SET_SEARCH_TERM:
        return ({
            // this is used to access and store the prev members of the data layer
            ...state,
            term: action.term
           }    
        );
        // if the action type is not matched then it returns the default state
        default:
            return state;
    }
};
export default reducer;
import { createStore } from 'redux';


export const myReducer = (state, action) => {

    switch(action.type){
        case "SUMAR":
            return {
                ...state,
                num: state.num + action.num
            }
        case "RESTAR": 
            return {
                ...state,
                num: state.num - action.num
            }
            
        default:
                break;
    }

    return state;
}


export default createStore(myReducer, { num: 0 } );



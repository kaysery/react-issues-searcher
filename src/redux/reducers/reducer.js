import {FETCH_ISSUES_INFO_FROM_REPO,FILTER_ISSUES} from '../actions/types'


export const IssuesReducer = (state = {},action)=>{
    switch(action.type){

        case FETCH_ISSUES_INFO_FROM_REPO:
         return {...state,data:[...action.payload]};

        case FILTER_ISSUES:
            return {...state,dataFiltered:[...action.payload]};
   
        default:
            return state;
    }

}
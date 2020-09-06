import {combineReducers} from 'redux';
import {IssuesReducer} from './reducer'
export default combineReducers({
    issues : IssuesReducer
});
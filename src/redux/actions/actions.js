import {FETCH_ISSUES_INFO_FROM_REPO,FILTER_ISSUES} from './types'

const fetchIssuesRepoInfoAction = (issues) => {
    return{
        type: FETCH_ISSUES_INFO_FROM_REPO,
        payload: issues
    }
}

const filterIssuesAction = (filteredIssues) => {
    return{
        type: FILTER_ISSUES,
        payload: filteredIssues
    }
}


export const fetchIssuesRepoInfo = () => {
    return (dispatch) => {
        fetch('https://api.github.com/repos/facebook/react/issues')
        .then(data => data.json())
        .then(res=> dispatch(fetchIssuesRepoInfoAction(res)))
        .catch(e=> console.error(e));
    }
}


export const filterIssues = (filteredIssues)=>{
    return (dispatch) =>{
        dispatch(filterIssuesAction(filteredIssues));
    }
}



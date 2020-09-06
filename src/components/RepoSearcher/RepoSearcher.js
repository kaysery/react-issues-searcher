import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import  Autocomplete from '../Autocomplete'
import  ItemList from '../ItemList/ItemList'
import { fetchIssuesRepoInfo } from '../../redux/actions/actions'
import './RepoSearcher.css'


const RepoSearcher = ({getIssues}) =>{

    useEffect(()=>{ getIssues() },[]);

   return(<div className="container">
     <h1 className="header1">Search for React Issues</h1>  
    <Autocomplete></Autocomplete>
    <ItemList></ItemList>
    </div>)
}


const mapDispatchToProps = (dispatch) => {
    return {
        getIssues: () => dispatch(fetchIssuesRepoInfo())
    }
}


export default connect(null,mapDispatchToProps)(RepoSearcher);
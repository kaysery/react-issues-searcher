import React from 'react';
import { connect } from 'react-redux';
import './ItemList.css';
import Item from './Item/Item'

const ItemList = ({ filteredIssues = [] }) => {
    return (<div className="list-container">
        {filteredIssues.map((issue) =>
        <Item key={issue.id} {...issue}></Item>
        )}
    </div>
    )
}


const mapStateToProps = (state) => {
    return {
        filteredIssues: state.issues.dataFiltered
    }
}


export default connect(mapStateToProps, null)(ItemList);
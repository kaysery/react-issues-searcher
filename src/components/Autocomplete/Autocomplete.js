import { connect } from 'react-redux';
import React, { useState, useRef } from 'react';
import './Autocomplete.css'
import { filterIssues } from '../../redux/actions/actions'


const Autocomplete = ({issues = [],saveFilteredIssues}) => {

    //let names = ['The issue number ones', 'the very large issue description'];
    const [selectedIssue, setSelectedIssue] = useState(-1);
    const [filteredIssues, setFilteredIssues] = useState([]);
    const [issueNameFilter, setIssueNameFilter] = useState('');
    const childsRef = useRef();

    
    const search = () =>{
        if(childsRef.current.children.length > 0){
            
            setFilteredIssues([]);

            if(selectedIssue >= 0){
                setIssueNameFilter(filteredIssues[selectedIssue].title);
                saveFilteredIssues([filteredIssues[selectedIssue]]);
            }else{
                saveFilteredIssues([...filteredIssues]);
            }
        }
    }

    const onKeyDownHandler = (event) => {          
            if(event.keyCode === 40){  //DOWN KEY
                if(childsRef.current.children.length > 0){
                    setSelectedIssue((selectedIssue + 1) >= filteredIssues.length ? 0 : (selectedIssue + 1));       
                }  
            }else if(event.keyCode === 38){ //UP KEY
                if(childsRef.current.children.length > 0){
                    setSelectedIssue((selectedIssue - 1) < 0 ? filteredIssues.length - 1  : (selectedIssue - 1));                
                }
            }else if(event.keyCode === 13){  //ENTER KEY
                search();
            }
    }

    const onChangeHandler = (event) => {

        setIssueNameFilter(event.target.value);

        if(event.target.value && event.target.value.length > 0){
            let regExp = new RegExp(event.target.value,'i');
            setFilteredIssues(issues.filter(issue => issue.title.match(regExp)));
            setSelectedIssue(-1);
        }else{
            setFilteredIssues([]);
            setSelectedIssue(-1);
        }
        
    }

    const onItemClick = (index) =>{
        setSelectedIssue(index);
        setIssueNameFilter(filteredIssues[index].title);
        saveFilteredIssues([filteredIssues[index]]);
    }


    return (
        <div className="autocomplete"  onKeyDown={onKeyDownHandler}>
            <div className="autocomplete-filter">
            <input className="primary-txt mr-10" 
            type="text" 
            placeholder="Type Here"
            onChange={onChangeHandler}
            onBlur={() => { setTimeout(()=>setFilteredIssues([]),200)}}
            value={issueNameFilter} />

            <button className="primary-btn" onClick={()=>{search()}}>Search</button>
            </div>
            
            <div className="autocomplete-items" ref={childsRef}>
                {filteredIssues.map((issue, index) =>
                   <div  
                   className={index === selectedIssue ? "autocomplete-active" : ""}  
                   key={issue.id + index} 
                   onClick={()=>onItemClick(index)}>{issue.title}</div>
                )}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        issues: state.issues.data
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        saveFilteredIssues: (filteredIssues)=> dispatch(filterIssues(filteredIssues))
    }
}


//export default Autocomplete;
export default connect(mapStateToProps,mapDispatchToProps)(Autocomplete);
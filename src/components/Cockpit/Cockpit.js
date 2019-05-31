import React, { Fragment } from 'react';
import SearchedResults from '../SearchedResults/SearchedResults';
import './Cockpit.css'

const cockpit = (props) => {
    console.log(props);
    return (
        <Fragment>
            <input onChange={props.searchState} />
            <SearchedResults searchedResults={props.searchedResult}/>
        </Fragment>
    );
}

export default cockpit;
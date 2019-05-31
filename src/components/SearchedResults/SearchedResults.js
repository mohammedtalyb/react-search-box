import React from 'react';
import SearchedResult from '../SearchedResults/Searchedresult/SearchedResult';

const searchedResults = (props) => {
    console.log(props);
    return props.searchedResults.map(state => {
        return (
            <SearchedResult key={state.key}
            stateName={state.name} />
        );
    })
}

export default searchedResults;
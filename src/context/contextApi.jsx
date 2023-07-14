import { createContext, useEffect, useState } from 'react'
import { fetchDataFromApi } from '../utills/api';
// import React from 'react';
// import PropTypes from 'prop-types';

export const Context = createContext();

// static get propTypes() { 
//     return { 
//         children: PropTypes.any, 
//         onClickOut: PropTypes.func 
//     }; 
// }

export const ApiContext = (props) => {

    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState(false);
    const [selectCategory, setSelectCategory] = useState('new');
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(()=>{
        fetchSelectedCategoryData(selectCategory)
    }, [selectCategory]);

    const fetchSelectedCategoryData = (query) => {
        setLoading(true);
        fetchDataFromApi(`search/?q=${query}`).then(({contents})=>{
            console.log(contents);
            setSearchResults(contents);
            setLoading(false);
        })

    }
    const {children} = props;

  return (

    <Context.Provider value={
        {
            loading,
            setLoading,
            searchResults, setSearchResults,
            selectCategory, setSelectCategory,
            mobileMenu,
            setMobileMenu
        }
    }>
    {children}

    </Context.Provider>
  )
}



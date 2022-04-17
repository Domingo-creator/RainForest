import React, { useEffect, useState } from 'react'
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"
import { openModal } from "../../../actions/modal_actions"
import { fetchProducts, fetchSearchResults } from "../../../actions/product_actions"


const SearchBar = ({department, setDepartment, fetchProducts, fetchSearchResults, searchResults, openModal, history})=> {
    
    const[searchText, setSearchText] = useState(sessionStorage.getItem('searchText') || '')
    const[results, setResults] = useState()

    useEffect( () => {
        sessionStorage.getItem('searchText') && setSearchText(JSON.parse(sessionStorage.getItem('searchText')))
        sessionStorage.getItem('department') && setDepartment(sessionStorage.getItem('department'))
    }, [])

    useEffect(() => {
        sessionStorage.setItem('searchText', JSON.stringify(searchText))
        sessionStorage.setItem('department', department)
        fetchSearchResults(createFilter())
    }, [searchText, department])
    
    const updateSearchText = (e) => {
        setSearchText(e.target.value)
    }

    const updateDepartment = (e) => {
        setDepartment(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let filter = createFilter()
        sessionStorage.setItem('prevFilter', filter)
        fetchProducts(filter)
            .then(history.push('/products'))
    }

    const createFilter = () => {
        let filterArray = [];
        if(searchText !== "") {
            filterArray.push(`LOWER(name) LIKE LOWER('%${searchText}%')`)
        }
        if(department !== 'All Departments' && department !== 'All Products') {
            filterArray.push(`category = '${department}'`)
        }
        return filterArray.join(" AND ")
    }

        return(
            <form 
                className="search-bar"
                onSubmit={(e) => handleSubmit(e)}
                >

                <select 
                    name="department" 
                    id="department-dropdown"
                    value={department}
                    onChange={updateDepartment}
                    >
                        <option value="All Departments">All Departments</option>
                        <option value="Toys & Games">Toys & Games</option>
                        <option value="Health & Household">Health & Household</option>
                        <option value="Fashion">Fashion</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Pet Supplies">Pet Supplies</option>
                        <option value="Sporting Goods">Sporting Goods</option>
                </select>    

                <input
                    type="text"
                    className="search-field"
                    value= {searchText}
                    onClick = {() => openModal('results')}
                    onChange={updateSearchText}
                />
                {}
                <button>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="searchicon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"></path></svg>
                </button>
            </form>
        )
}



const mapStateToProps = state => {
    return {
        searchResults: Object.values(state.entities.searchResults)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchProducts: (filter) => dispatch(fetchProducts(filter)),
        fetchSearchResults: (filter) => dispatch(fetchSearchResults(filter)),
        openModal: (modal) => dispatch(openModal(modal))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBar))
import React, { useState } from "react"

const SearchBar = ({fetchProducts, history}) => {
    const [searchText, setSearchText] = useState('')

    const update = (e) => {
        setSearchText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault
        fetchProducts(`name LIKE ${searchText}`)
            .then(history.push('/products'))
    }

    return(
        <form 
            className="search-bar"
            onSubmit={(e) => handleSubmit(e)}
            >
            <input
                type="text"
                value= {searchText}
                onChange={update}
            />
            <button>Search</button>
        </form>
    )
}

export default SearchBar
import React from 'react'

const CategoryLink = ({category, updateFilter, history}) => {

    const performCategorySearch = () => {
        updateFilter({searchText: '', department: category})
        sessionStorage.removeItem('searchText')
        sessionStorage.setItem('department', category)
        history.push('/products')
    }
    
    return (
        <p className="nav-link" onClick={performCategorySearch}>{category}</p>
    )
}

export default CategoryLink
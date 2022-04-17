import React from 'react'

const CategoryLink = ({category, fetchProducts, history, department, setDepartment}) => {

    const performCategorySearch = (e) => {
        sessionStorage.setItem('department', e.target.textContent)
        setDepartment(e.target.textContent)
        if(category !== 'All Products') {
            sessionStorage.setItem('prevFilter', `category = '${category}'` )
            fetchProducts(`category = '${category}'`)
                .then(history.push('../products'))
        }
        else {
            sessionStorage.removeItem('prevFilter')
            fetchProducts()
                .then(history.push('../products'))
        }
    }

    return (
        <p className="nav-link" onClick={performCategorySearch}>{category}</p>
    )
}

export default CategoryLink
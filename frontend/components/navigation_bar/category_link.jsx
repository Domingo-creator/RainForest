import React from 'react'

const CategoryLink = ({category, fetchProducts, history, department, setDepartment}) => {

    const performCategorySearch = (e) => {
        localStorage.setItem('department', e.target.textContent)
        setDepartment(e.target.textContent)
        if(category !== 'All Products') {
            fetchProducts(`category = '${category}'`)
                .then(history.push('./products'))
        }
        else {
            fetchProducts()
                .then(history.push('./products'))
        }
    }

    return (
        <p className="nav-link" onClick={performCategorySearch}>{category}</p>
    )
}

export default CategoryLink
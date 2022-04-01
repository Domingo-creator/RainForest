import React from 'react'

const CategoryLink = ({category, fetchProducts, history, department, setDepartment}) => {

    const performCategorySearch = (e) => {
        localStorage.setItem('department', e.target.textContent)
        setDepartment(e.target.textContent)
        if(category !== 'All Products') {
            localStorage.setItem('prevFilter', `category = '${category}'` )
            fetchProducts(`category = '${category}'`)
                .then(history.push('../products'))
        }
        else {
            localStorage.removeItem('prevFilter')
            fetchProducts()
                .then(history.push('../products'))
        }
    }

    return (
        <p className="nav-link" onClick={performCategorySearch}>{category}</p>
    )
}

export default CategoryLink
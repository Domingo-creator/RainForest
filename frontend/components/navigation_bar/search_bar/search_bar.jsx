import React from 'react'

class SearchBar extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            searchText: localStorage.getItem('searchText') || ''
        }   
    }

    componentDidMount() {
        localStorage.getItem('searchText') && this.setState({
            searchText: JSON.parse(localStorage.getItem('searchText')),
        })

        localStorage.getItem('department') && this.props.setDepartment(localStorage.getItem('department'))
        
    }

    componentDidUpdate() {
        localStorage.setItem('searchText', JSON.stringify(this.state.searchText))
        localStorage.setItem('department', this.props.department)
    }
    
    updateSearchText = (e) => {
        this.setState({searchText: e.target.value})
    }

    updateDepartment = (e) => {
        this.props.setDepartment(e.target.value)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let filter = this.createFilter()
        localStorage.setItem('prevFilter', filter)
        this.props.fetchProducts(filter)
            .then(this.props.history.push('/products'))
    }

    createFilter = () => {
        let filterArray = [];
        if(this.state.searchText !== "") {
            filterArray.push(`LOWER(name) LIKE LOWER('%${this.state.searchText}%')`)
        }
        if(this.props.department !== 'All Departments' && this.props.department !== 'All Products') {
            filterArray.push(`category = '${this.props.department}'`)
        }
        
        return filterArray.join(" AND ")
    }

    render() {
        return(
            <form 
                className="search-bar"
                onSubmit={(e) => this.handleSubmit(e)}
                >

                <select 
                    name="department" 
                    id="department-dropdown"
                    value={this.props.department}
                    onChange={this.updateDepartment}
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
                    value= {this.state.searchText}
                    onChange={this.updateSearchText}
                />
                <button>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="searchicon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M15.7 13.3l-3.81-3.83A5.93 5.93 0 0 0 13 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 0 0 0-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z"></path></svg>
                </button>
            </form>
        )
    }
}

export default SearchBar


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
        e.preventDefault
        this.props.fetchProducts(this.createFilter())
            .then(this.props.history.push('/products'))
    }

    createFilter = () => {
        let filterArray = [];
        if(this.state.searchText !== "") {
            filterArray.push(`LOWER(name) LIKE LOWER('%${this.state.searchText}%')`)
        }
        if(this.props.department !== 'All Departments') {
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
                    value= {this.state.searchText}
                    onChange={this.updateSearchText}
                />
                <button>Search</button>
            </form>
        )
    }
}

export default SearchBar


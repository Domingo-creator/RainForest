// import React, { useEffect, useState } from "react"

// const SearchBar = ({fetchProducts, history}) => {
//     let initialSearchText =  () => window.localStorage.getItem('searchText') || ''
//     let initialDepartment = () => window.localStorage.getItem('department') || 'All Departments'
//     const [searchText, setSearchText] = useState(initialSearchText)
//     const [department, setDepartment] = useState(initialDepartment)
  
//     const updateSearchText = (e) => {
//         setSearchText(e.target.value)
//     }

//     const updateDepartment = (e) => {
//         debugger
//         setDepartment(e.target.value)
//         debugger
//     }


//     const handleSubmit = (e) => {
//         e.preventDefault
//         // fetchProducts(createFilter())
//         //     .then(history.push('/products'))
//     }

//     const createFilter = () => {
//         let filterArray = [];
//         if(searchText !== "") {
//             filterArray.push(`LOWER(name) LIKE LOWER('%${searchText}%')`)
//         }
//         if(department !== 'All Departments') {
//             filterArray.push(`category = '${department}'`)
//         }
//         return filterArray.join(" AND ")
//     }

//     useEffect = ( () => {
//         debugger
//         window.localStorage.setItem('searchText', searchText)
//     },[searchText])

//     useEffect = ( () => {
//         debugger
//         window.localStorage.setItem('department', department)
//     },[department])

//     return(
//         <form 
//             className="search-bar"
//             onSubmit={(e) => handleSubmit(e)}
//             >

//             <select 
//                 name="department" 
//                 id="department-dropdown"
//                 value={department}
//                 onChange={updateDepartment}
//                 >
//                     <option value="All Departments">All Departments</option>
//                     <option value="Toys & Games">Toys & Games</option>
//                     <option value="Health & Household">Health & Household</option>
//                     <option value="Fashion">Fashion</option>
//                     <option value="Electronics">Electronics</option>
//                     <option value="Pet Supplies">Pet Supplies</option>
//                     <option value="Sporting Goods">Sporting Goods</option>
//             </select>    

//             <input
//                 type="text"
//                 value= {searchText}
//                 onChange={updateSearchText}
//             />
//             <button>Search</button>
//         </form>
//     )
// }

// export default SearchBar
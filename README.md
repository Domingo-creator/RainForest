# Welcome to RainForest
RainForest is an amazon clone, where you can shop and search for all your needs.

LIVE-LINK: https://rainforest-amazon-clone.herokuapp.com/#/products

![alt text](https://github.com/Domingo-creator/RainForest/blob/master/app/assets/images/main_page_screenshot.png) 


# Technologies Used
+ Ruby on Rails
+ React / Redux
+ JavaScript / AJAX / JBuilder
+ PostgreSQL
+ HTML5 and CSS
+ AWS S3 and AWS IAM
+ Heroku


# Features
### Products Search and Sort-by category
Users can select a department from the drop down menu, or click one of the department links to add a category filter to the product search.  Users can also type a search term into the search bar to filter for products that contain the search term in their name within the selected department.

```
  useEffect( () => {
        let storedSearchText = sessionStorage.getItem('searchText')
        let storedDepartment = sessionStorage.getItem('department')
        storedSearchText && setSearchText(storedSearchText)
        storedDepartment && setDepartment(storedDepartment)
    }, [])
```
```
  useEffect(() => {
      sessionStorage.setItem('searchText', searchText)
      sessionStorage.setItem('department', department)
      fetchSearchResults({searchText: searchText, department:department})
  }, [searchText, department])

```

### Update Cart
Users can add, update quantities, and delete products from their cart.  If not logged in, cart items will be stored in sessionStorage until the user logs in, at which time the cart will be merged with the users cart.  Users can checkout their cart when they are finished shopping, or select the **_buy now_** option to instantly checkout an item.

```
 let matchingCartItem = findMatchingCartItem(cartItems);
  if(matchingCartItem) {
      matchingCartItem.quantity = matchingCartItem.quantity + parseInt(quantity)
      updateCartItem(matchingCartItem).then( () => openModal('addToCartConfirm'))
  } else {
      createCartItem(userId, cartItem).then( () => openModal('addToCartConfirm'));
  }
  sessionStorage.setItem('newCartItem', JSON.stringify({image_url: product.image_url}))
```

```
const mergeTempCart = () => {
for(let i = 0; i < tempCart.length; i++ ) {
    let matchingCartItem = findMatchingCartItem(tempCart[i]);
    if(matchingCartItem) {
        matchingCartItem.quantity += tempCart[i].quantity
        totalMergedToCart.current += tempCart[i].quantity
        updateCartItem(matchingCartItem)
    } else {
        tempCart[i].userId = userId
        totalMergedToCart.current += tempCart[i].quantity
        createCartItem(userId, tempCart[i])
    }
}
if(tempCart.length) openModal('cartMergedNotice')
updateTempCart([])
}
```

### Leave Reviews
Users can leave reviews for products.  Reviews for any given product are averaged to give the star rating for the product.
```
<label>
    {rating >= 1 ? fullStar() : emptyStar()}
    {radioInput(1)}
</label>
<label>
    {rating >= 2 ? fullStar() : emptyStar()}
    {radioInput(2)}
</label>
```

```

```

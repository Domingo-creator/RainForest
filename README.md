![alt text](https://github.com/Domingo-creator/RainForest/blob/master/app/assets/images/main_page_screenshot.png) 

# Welcome to RainForest
RainForest is a full-stack web application that replicates the primary features of **_amazon.com_**.  Users can browse a vast collection of products through the use of various filtering options. Users can add products to their personal cart and checkout items in thier cart when they are finished.  

LIVE-LINK: https://rainforest-amazon-clone.herokuapp.com/#/


## Technologies Used
RainForest was constructed utilizing a combination of Ruby on Rails, Postgres, React, Redux, JavaScript, HTML, and CSS. Ruby on Rails was used to create a Model-View-Controller Architecture with Postgres used as the database. React and Redux were then incorporated to dynamically connect the backend to the frontend. AWS S3 was used to store media assets which are fetched as needed. The frontend was structured with HTML and styled with CSS.


## Features
### Products Search and Sort-by category
Users can find by products through the use of either the search bar or category links. A dropdown menu next to the search bar allows users to filter results to the selected department. Products are fetched based on the combination of filters provided. Matching results to the current department/search-term combination will be displayed as links and updated in real time.  Selected filters will be saved on reload through the use of sessionStorage.  
![rainforest_search](https://user-images.githubusercontent.com/59151493/166298514-37f8a4fb-4f52-4fe7-8722-4bba67765f78.gif)

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

![rainforest_cart](https://user-images.githubusercontent.com/59151493/166296492-e360ccc0-8ba5-498e-bb46-9b91b0da614f.gif)

Users can add, update quantities, and delete products from their cart.  If not logged in, cart items will be stored in a temporary cart until the user logs in, at which time the cart will be merged with the users cart.  Users can checkout their cart when they are finished shopping, or select the **_buy now_** option to instantly checkout an item.  When the user is on their cart page, they may choose which items they would like to checkout.  Total costs will be determined based on selected items at the checkout page, and cart items will be deleted from the cart after payment is complete.

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
If logged in, users can leave reviews for products, which includes a mandatory star rating, and an option headline and body.  Star ratings for all reviews of a product are averaged and displayed as an overall rating on the product pages.

![rainforest_reviews](https://user-images.githubusercontent.com/59151493/166301291-4ba76ff8-c7c3-46fb-988d-b97fd63b54bc.gif)

```
<div onChange={updateRating} className="review-form-rating">
  <label>
      {rating >= 1 ? fullStar() : emptyStar()}
      {radioInput(1)}
  </label>
  <label>
      {rating >= 2 ? fullStar() : emptyStar()}
      {radioInput(2)}
  </label>
  <label>.....
```


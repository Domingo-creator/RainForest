json.extract! cart_item, :id, :userId, :productId, :quantity
json.extract! cart_item.product, :name, :price

if cart_item.product.image.attachment == nil 
    json.image_url  ''
else
    json.image_url url_for(cart_item.product.image)
end


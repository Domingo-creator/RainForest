json.extract! product, :id, :name, :price, :category, :body, :description, :product_detail
if product.image.attachment == nil 
    json.image_url = ''
else
    json.image_url url_for(product.image)
end

json.reviews do 
    if( product.reviews.length)
        json.array! product.reviews, :rating
    end
end




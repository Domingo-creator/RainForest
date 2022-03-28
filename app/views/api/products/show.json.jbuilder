
json.partial! '/api/products/product', product: @product
#if @product.image.attachment == nil 
 #   json.image_url = ''
#else
#    json.image_url url_for(@product.image)
#end

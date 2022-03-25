
@cart_items.each do |cart_item|
    json.set! cart_item.id do
        json.extract! cart_item, :id, :userId, :productId
    end 
end

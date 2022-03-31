class CartItem < ApplicationRecord
    validates :userId, :productId, :quantity, presence:true

    belongs_to :user,
        foreign_key: :userId,
        class_name: :User

    belongs_to :product,
        foreign_key: :productId,
        class_name: :Product

    
end

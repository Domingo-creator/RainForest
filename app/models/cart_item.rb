class CartItem < ApplicationRecord
    validates :userId, :productId, :quantity, presence:true

    belongs_to :users,
        foreign_key: :userId,
        class_name: :User

    belongs_to :products,
        foreign_key: :productId,
        class_name: :Product
end

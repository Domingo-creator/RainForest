class Product < ApplicationRecord
    validates :name, :price, :category, presence:true

    has_many :instances_in_cart,
        foreign_key: :productId,
        class_name: :CartItem

    has_many :reviews,
        foreign_key: :productId,
        class_name: :Review

    has_one_attached :image
end

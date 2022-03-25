class Review < ApplicationRecord
    validates :user_id, :product_id, :rating, presence:true

    belongs_to :reviewer,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :product,
        foreign_key: :product_id,
        class_name: :Product


end

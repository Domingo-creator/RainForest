class Review < ApplicationRecord
    validates :userId, :productId, :rating, presence:true

    belongs_to :reviewer,
        foreign_key: :userId,
        class_name: :User

    belongs_to :product,
        foreign_key: :productId,
        class_name: :Product


end

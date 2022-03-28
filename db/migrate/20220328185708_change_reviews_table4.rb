class ChangeReviewsTable4 < ActiveRecord::Migration[5.2]
  def change
    add_index :reviews, :userId
  end
end

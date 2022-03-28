class ChangeReviewsTable3 < ActiveRecord::Migration[5.2]
  def change
    rename_column :reviews, :user_id, :userId

  end
end

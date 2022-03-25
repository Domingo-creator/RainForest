class Ugh < ActiveRecord::Migration[5.2]
  def change
    change_column :products, :body, :text
    change_column :products, :description, :text
    change_column :products, :product_detail, :text
  end
end

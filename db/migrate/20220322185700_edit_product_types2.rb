class EditProductTypes2 < ActiveRecord::Migration[5.2]
  def change
    change_column :products, :body, :string
    change_column :products, :description, :string
    change_column :products, :product_detail, :string
  end
end
